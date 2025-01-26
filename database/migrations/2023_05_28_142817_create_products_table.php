<?php

use App\Models\Brand;
use App\Models\Price;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('slug')->unique();
            $table->integer('quantity');
            $table->integer('price');
            $table->boolean('is_public')->default(false);
            $table->boolean('is_new')->default(true);
            $table->boolean('is_sale')->default(false);
            $table->boolean('in_stock')->default(false);
            $table->foreignId('category_id')
                ->constrained()
                ->onDelete('cascade');
            $table->foreignIdFor(Price::class, 'price_id')->nullable();
            $table->foreignIdFor(Brand::class, 'brand_id')->nullable();
            $table->foreignIdFor(User::class, 'created_by')->nullable();
            $table->foreignIdFor(User::class, 'updated_by')->nullable();
            $table->foreignIdFor(User::class, 'deleted_by')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
