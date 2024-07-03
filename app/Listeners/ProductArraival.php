<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Events\ProductCreated;
use App\Jobs\SendEmail;
use App\Mail\ProductCreatedMail;
use App\Models\User;
use Mail;

class ProductArraival
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
     
    }

    /**
     * Handle the event.
     */
    public function handle(ProductCreated $event): void
    {
        SendEmail::dispatch($event->product);
    }
}
