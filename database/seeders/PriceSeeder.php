<?php

namespace Database\Seeders;

use App\Models\Price;
use Illuminate\Database\Seeder;

class PriceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Price::create(['title' => 'min-100']);
        Price::create(['title' => '100-500']);
        Price::create(['title' => '500-1000']);
        Price::create(['title' => '1000-max']);
    }
}
