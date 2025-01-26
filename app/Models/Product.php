<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory, SoftDeletes, Sluggable;

    protected $fillable = [
        'title',
        'description',
        'price',
        'category_id',
        'brand_id',
        'is_public',
        'is_new',
        'is_sale',
        'in_stock',
        'quantity',
        'slug',
        'created_by',
        'updated_by',
        'deleted_by',
        'price_id'
    ];

//    protected $dispatchesEvents = [
//        'created' => ProductCreated::class
//    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:m:s'
    ];
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d');
    }

//    public function created_by(): BelongsTo
//    {
//        return $this->belongsTo(User::class, 'id', 'created_by');
//    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class);
    }

    public function product_images(): HasMany
    {
        return $this->hasMany(ProductImage::class);
    }

    public function cartItems(): HasMany
    {
        return $this->hasMany(CartItem::class);
    }

//    public function price(): string
//    {
//        return number_format($this->price, 0, '', ' ');
//    }

    public function scopePublic(Builder $query): void
    {
        $query->where('is_public', true);
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    public function scopeFilter(Builder $query, array $brands, array $categories, array $prices): void
    {
        if (count($brands)) {
            $query->whereIn('brand_id', $brands);
        }

        if(count($categories)){
            $query->whereIn('category_id', $categories);
        }

        if(count($prices)){
            $query->whereIn('price_id', $prices);
        }
    }
}
