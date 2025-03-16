<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order_product extends Model
{
    protected $table = 'order_product';

    protected $fillable = ['order_id', 'product_id', 'quantity', 'product_price'];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
