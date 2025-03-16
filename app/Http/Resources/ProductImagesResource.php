<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProductImagesResource extends JsonResource
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
            //'product_id' => $this->product_id,
            'image_path' => $this->image_path,
            'image_url' => url('storage', $this->image_path),
            'size' => Storage::disk('public')->size($this->image_path),
            'name' => str_replace('product_images/', '', $this->image_path),
        ];
    }
}
