<?php

namespace Database\Factories;

use App\Models\Brand;
use App\Models\Category;
use App\Models\User;
use App\Traits\Price;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    use Price;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $price = fake()->numberBetween(0, 1500);
        $case = $this->getCase($price);

        return [
            'title' => fake()->words(3, true),
            'description' => fake()->paragraph(),
            'quantity' => fake()->numberBetween(1, 100),
            'price' => $price,
            'price_id' => $case,
            //'image_path' => fake()->imageUrl(),
            'category_id' => Category::get()->random()->id,
            'brand_id' => Brand::get()->random()->id,
            'is_public' => fake()->boolean(),
            'is_sale' => fake()->boolean(),
            'is_new' => fake()->boolean(),
            'in_stock' => fake()->boolean(),
            'created_by' => User::get()->random()->id,
            'updated_by' => null,
            'deleted_by' => null,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
