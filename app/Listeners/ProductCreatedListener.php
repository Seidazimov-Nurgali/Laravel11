<?php

namespace App\Listeners;

use App\Events\ProductCreated;
use App\Notifications\ProductCreatedNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\User;
use Illuminate\Support\Facades\Notification;

class ProductCreatedListener implements ShouldQueue
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(ProductCreated $event): void
    {
//        $admins = User::whereHas('roles', function ($query){
//            $query->where('id', 1);
//        })->get();
        $admins = User::whereIn('id', [1])->get();

        Notification::send($admins, new ProductCreatedNotification($event->product));
    }
}
