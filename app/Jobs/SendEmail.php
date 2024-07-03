<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Models\User;
use App\Mail\NewProductArraival;
use Mail;

class SendEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public $product;
    public function __construct($product)
    {     
        $this->product = $product;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {

    
        $users = User::all();
      

        foreach ($users as $user) {
            try {
                Mail::to($user->email)->send(new NewProductArraival($this->product));
            } catch (\Exception $e) {
                // Log the error or send a notification to the development team
                dd($e->getMessage());
                // \Log::error("Error sending email to {$user->email}: {$e->getMessage()}");
            }
        }
    }
}
