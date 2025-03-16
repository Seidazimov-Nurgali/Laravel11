<?php

namespace App\Http\Controllers;

use App\Enums\OrderStatus;
use App\Jobs\OrderCreatedJob;
use App\Models\CartItem;
use App\Models\Order;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $carts = CartItem::with('product')
            ->where('user_id', auth()->user()->id)
            ->get();

        if ($carts->count()) {
            //            try {
            //                Cache::lock('ordering')->block(2, function () use ($request, $carts) {
            foreach ($carts as $cart) {
                if ($cart->product->quantity < $cart->quantity) {
                    return redirect()->back()->withErrors('Недостаточно товара: '.$cart->product->title.' в базе!');
                }
            }

            $order = DB::transaction(function () use ($carts, $request) {
                $order = Order::create([
                    'user_id' => auth()->id(),
                    'total_price' => 0,
                    'status' => OrderStatus::PROCESSING,
                ]);

                foreach ($carts as $cart) {
                    $product = $cart->product;
                    $order->products()->attach($cart->product_id, [
                        'quantity' => $cart->quantity,
                        'product_price' => $product->price,
                    ]);

                    //$order->increment('total_price', $product->price * $cart->quantity);

                    $product->decrement('quantity', $cart->quantity);
                    $cart->delete();
                }
                $order->increment('total_price', $request->realPrice);

                OrderCreatedJob::dispatch($order);

                return $order;
            });

            return Inertia::render('Site/Order', ['order' => $order]);
            //                });
            //            } catch (Exception $e) {
            //                return $e->getMessage();
            //            }
        } else {
            abort(404);
        }
    }

    public function show($order)
    {
        return Inertia::render('OrderShow', [
            'order' => Order::with('products')
                ->findOrFail($order),
        ]);
    }
}
