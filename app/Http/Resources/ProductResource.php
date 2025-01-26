<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'is_new' => $this->is_new,
            'is_public' => $this->is_public,
            'is_sale' => $this->is_sale,
            'in_stock' => $this->in_stock,
            'quantity' => $this->quantity,
            'price' => $this->price,
            'created_at' => $this->created_at,
            'category' => new CategoryResource($this->category),
            'brand' => new BrandResource($this->brand),
            'product_images' => ProductImagesResource::collection($this->product_images)
        ];
    }
}
