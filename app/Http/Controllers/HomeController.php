<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $orders = Order::with('products')->whereUserId(auth()->id())->get();

        return Inertia::render('Dashboard', ['orders' => $orders]);
    }
}
