<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Price;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class SiteController extends Controller
{
    public function index(Request $request)
    {
        $best_sellers = Cache::remember('best-sellers', 60 * 60 * 24, function () {
            return Product::query()
                    ->withTrashed()
                    ->join('order_product', 'products.id', '=', 'order_product.product_id')
                    ->join('orders', 'order_product.order_id', '=', 'orders.id')
                    ->selectRaw('products.*, SUM(order_product.quantity) as products_sold')
                    ->whereBetween('orders.created_at', [
                        now()->subDays(30)->format('Y-m-d') . ' 00:00:00',
                        now()->subDay()->format('Y-m-d') . ' 00:00:00'
                    ])
                    ->where('orders.status', "1")
                    ->groupBy('products.id')
                    ->orderBy('products_sold', 'desc')
                    ->get();
        });

        $selected = $request->input('selected', [
            'categories' => [],
            'brands' => [],
            'prices' => []
        ]);

        $prices = Price::withCount(['products' => function ($query) use ($selected) {
            $query->filter($selected['brands'] ?? [], $selected['categories'] ?? [], []);
        }])->get();

        $brands = Brand::withCount(['products' => function ($query) use ($selected) {
            $query->filter([], $selected['categories'] ?? [], $selected['prices'] ?? []);
        }])->get();

        $categories = Category::withCount(['products' => function ($query) use ($selected) {
            $query->filter($selected['brands'] ?? [], [], $selected['prices'] ?? []);
        }])->get();

        $products = Product::query()
            ->with('product_images', 'category', 'brand')
            ->filter($selected['brands'] ?? [], $selected['categories'] ?? [], $selected['prices'] ?? [])
            ->latest()
            ->get();

        return Inertia::render('Site/Index', [
            'products' => $products,
            'brands' => $brands,
            'categories' => $categories,
            'prices' => $prices,
            'selected' => $selected
        ]);
    }
}
