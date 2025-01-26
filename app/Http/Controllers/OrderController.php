<?php

namespace App\Http\Controllers;

use App\Jobs\OrderCreatedJob;
use App\Mail\OrderCreatedMail;
use App\Models\CartItem;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $carts = CartItem::with('product')
            ->where('user_id', auth()->user()->id)
            ->get();

        if($carts->count()){
            foreach ($carts as $cart) {
                if($cart->product->quantity < $cart->quantity){
                    return redirect()->back()->withErrors('Недостаточно товара: '.$cart->product->title.' в базе!');
                }
            }

            $order = DB::transaction(function () use($carts, $request) {
                $order = Order::create([
                    'user_id' => auth()->id(),
                    'total_price' => 0,
                    'status' => 1
                ]);

                foreach ($carts as $cart) {
                    $product = $cart->product;
                    $order->products()->attach($cart->product_id, [
                        'quantity' => $cart->quantity,
                        'product_price' => $product->price
                    ]);

                    //$order->increment('total_price', $product->price * $cart->quantity);

                    $product->decrement('quantity', $cart->quantity);
                    $cart->delete();
                }
                $order->increment('total_price', $request->realPrice);

                //OrderCreatedJob::dispatch($order);
                $users = User::whereIn('id', [1])->get();

                Mail::to($users)->send(new OrderCreatedMail($order));
                return $order;
            });

            return Inertia::render('Site/Order', ['order' => $order]);
        }else abort(404);
    }

    public function show($order)
    {
        return Inertia::render('OrderShow', ['order' => Order::with('products')->findOrFail($order)]);
    }
}
