<?php

namespace App\Jobs;

use App\Mail\OrderCreatedMail;
use App\Models\Order;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class OrderCreatedJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(
        public Order $order,
    ) {}

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $users = User::whereIn('id', [3, 4])->get();

        Mail::to($users)->send(new OrderCreatedMail($this->order));
    }
}
