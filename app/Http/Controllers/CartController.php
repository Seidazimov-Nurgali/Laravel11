<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required|integer',
        ]);

        Product::findOrFail($request->product_id);

        if ($request->user()) {
            $cart = CartItem::where([
                'product_id' => $request->product_id,
                'user_id' => $request->user()->id,
            ])->first();

            $cart ? $cart->increment('quantity')
                : CartItem::create([
                    'quantity' => 1,
                    'product_id' => $request->product_id,
                    'user_id' => $request->user()->id,
                ]);
        }

        return redirect()->back()->with('message', 'В корзину успешно добавлен!');
    }

    public function index()
    {
        return Inertia::render('Site/Cart', [
            'carts' => CartItem::with('product')
                ->where('user_id', auth()->user()->id)
                ->get(),
        ]);
    }

    public function increase(Request $request)
    {
        $cart = CartItem::with('product')
            ->where('user_id', auth()->user()->id)
            ->findOrFail($request->cartId);

        if ($cart->product->quantity == $cart->quantity) {
            return redirect()->back()->with('message', 'Количество продукта не хватает!');
        }

        $cart->increment('quantity');

        return redirect()->back()->with('message', 'Успешно обновлен!');
    }

    public function decrease(Request $request)
    {
        $cart = CartItem::where('user_id', auth()->user()->id)->findOrFail($request->cartId);
        $cart->quantity != 1 ? $cart->decrement('quantity') : $cart->delete();

        return redirect()->back()->with('message', 'Успешно обновлен!');
    }

    public function delete(Request $request)
    {
        $cart = CartItem::where('user_id', auth()->user()->id)->findOrFail($request->cartId);
        $cart->delete();

        return redirect()->back()->with('message', 'Успешно удалено!');
    }
}
