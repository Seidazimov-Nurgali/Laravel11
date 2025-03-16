<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Price;
use App\Models\Product;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('admin!23'),

        ]);
        User::factory(10)->create();
        Brand::factory(3)->create();
        Category::factory(3)->create();
        Price::create(['title' => 'min-100']);
        Price::create(['title' => '100-500']);
        Price::create(['title' => '500-1000']);
        Price::create(['title' => '1000-max']);
        Product::factory(5)->create();

        $this->call([
            RoleSeeder::class,
            RoleUserSeeder::class,
        ]);
    }
}
