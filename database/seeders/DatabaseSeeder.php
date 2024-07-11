<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Category;
use Database\Seeders\AdminSeeder;
use Database\Seeders\CategorySeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(10)->create();
        // Product::factory()->count(50)->create();
        // Category::factory()->count(50)->create();

        $this->call([
            AdminSeeder::class,
            CategorySeeder::class,
            SubCategorySeeder::class
        ]);
    }
}
