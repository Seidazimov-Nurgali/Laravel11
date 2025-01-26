<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\AdminMiddleware;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\CategoryController;

Route::get('/', [SiteController::class, 'index'])->name('main');

Route::middleware('auth')->group(function () {
    Route::middleware(AdminMiddleware::class)
        ->name('admin.')
        ->prefix('admin')
        ->group(function () {
            Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('dashboard');
            Route::resource('products', ProductController::class);
            Route::post('changePublish', [ProductController::class, 'changePublish'])->name('changePublish');
            Route::resource('categories', CategoryController::class)->only(['store', 'update', 'destroy', 'index']);
        });

    Route::get('/dashboard', [HomeController::class, 'index'])->middleware(['verified'])->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::prefix('carts')->controller(CartController::class)->group(function () {
        Route::post('/', 'store')->name('carts.store');
        Route::get('/', 'index')->name('carts.index');
        Route::post('/delete', 'delete')->name('carts.delete');
        Route::post('/increase', 'increase')->name('carts.increase');
        Route::post('/decrease', 'decrease')->name('carts.decrease');
    });

    Route::post('order', [OrderController::class, 'store'])->name('order');
    Route::get('order/{order}', [OrderController::class, 'show'])->name('order.show');
});


require __DIR__.'/auth.php';
