<?php

namespace App\Providers;
use Illuminate\Support\ServiceProvider;
use App\Repositories\Interfaces\ProductRepositoryInterface;
use App\Repositories\ProductRepository;
use App\Repositories\Interfaces\CategoryRepositoryInterface;
use App\Repositories\categoryRepository;
use App\Repositories\Interfaces\SubCategoryRepositoryInterfaces;
use App\Repositories\SubCategoryRepository;
use App\Jobs\SendEmail;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(ProductRepositoryInterface::class, ProductRepository::class);
        $this->app->bind(CategoryRepositoryInterface::class ,categoryRepository::class);
        $this->app->bind(SubCategoryRepositoryInterfaces::class,SubCategoryRepository::class);
      
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
