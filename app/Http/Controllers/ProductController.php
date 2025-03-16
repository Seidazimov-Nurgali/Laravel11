<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\User;
use App\Notifications\ProductPublishedNotification;
use App\Traits\Price;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ProductController extends Controller
{
    use Price;

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $products = Product::query()
            ->with('category', 'brand', 'product_images')
            ->filter([], [], [])
            ->latest()
            ->paginate(2)
            ->withQueryString();

        return Inertia::render('Admin/Products/Index', [
            'products' => ProductResource::collection($products),
            'filters' => $request->only(['search', 'sortBy', 'sortOrder']),
            'brands' => Brand::all(),
            'categories' => Category::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequest $request)
    {
        if ($request->user()->cannot('create', Product::class)) {
            abort(403);
        }

        if ($request->has('price')) {
            $case = $this->getCase($request->get('price'));
        }

        $product = Product::create([
            'title' => $request->title,
            'description' => $request->description,
            'quantity' => $request->quantity,
            'price' => $request->price,
            'category_id' => $request->category_id,
            'brand_id' => $request->brand_id,
            'is_public' => $request->isPublished,
            'in_stock' => $request->inStock,
            'is_sale' => $request->isSale,
            'is_new' => $request->isNew,
            'created_by' => $request->user()->id,
            'price_id' => $case ?? 1,
        ]);

        if ($request->has('images')) {
            foreach ($request->images as $image) {
                $uniqueName = time().'-'.Str::random(10).'.'.$image->getClientOriginalExtension();
                $imagePath = Storage::disk('public')->putFileAs('/product_images', $image, $uniqueName);
                //$image->move('product_images', $uniqueName);
                ProductImage::create([
                    'product_id' => $product->id,
                    'image_path' => $imagePath,
                    //'url' => url('/storage/', $imagePath)
                ]);
            }
        }

        //event(new ProductCreated($product));

        return redirect()->route('admin.products.index')->with('message', 'Product successfully created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return Inertia::render('Site/ProductShow', [
            'product' => new ProductResource($product),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //$this->authorize('update', $product);
        //Gate::authorize('update', $product);
        //        if ($request->user()->cannot('update', $product)) {
        //            abort(403);
        //        }

        if ($request->has('price')) {
            $case = $this->getCase($request->get('price'));
            $product->price_id = $case;
        }

        $product->title = $request->title;
        $product->description = $request->description;
        $product->quantity = $request->quantity;
        $product->price = $request->price;
        $product->category_id = $request->category_id;
        $product->brand_id = $request->brand_id;
        $product->is_public = $request->isPublished;
        $product->in_stock = $request->inStock;
        $product->is_sale = $request->isSale;
        $product->is_new = $request->isNew;
        $product->updated_by = $request->user()->id;
        $product->save();

        foreach ($request->removedImageIds ?? [] as $id) {
            $image = ProductImage::find($id);
            if ($image) {
                Storage::disk('public')->delete($image->image_path);
                $image->delete();
            }
        }

        foreach ($request->images ?? [] as $image) {
            $uniqueName = time().'-'.Str::random(10).'.'.$image->getClientOriginalExtension();
            $imagePath = Storage::disk('public')->putFileAs('/product_images', $image, $uniqueName);
            //$image->move('product_images', $uniqueName);
            ProductImage::create([
                'product_id' => $product->id,
                'image_path' => $imagePath,
            ]);
        }

        return redirect()->route('admin.products.index')->with('message', 'Product successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return redirect()->route('admin.products.index')->with('message', 'Product successfully deleted');
    }

    public function changePublish(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'status' => 'required|bool',
        ]);

        $product = Product::findOrFail($request->get('id'));
        $product->is_public = $request->get('status');
        $product->updated_by = $request->user()->id;
        $product->save();

        $admin = User::find(1);
        $admin->notify(new ProductPublishedNotification($product));

        return redirect()->route('admin.products.index')->with('message', 'Product successfully updated');
    }
}
