<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name'=>'Electronics',
                'status'=>1
            ],
            [
                'name'=>'Fashion',
                'status'=>1
            ],
            [
                'name'=>'FHome & Kitchen',
                'status'=>1
            ],
            [
                'name'=>'Beauty & Personal Care',
                'status'=>1
            ],
            [
                'name'=>'Health & Wellness',
                'status'=>1
            ],
            [
                'name'=>'Sports & Outdoors',
                'status'=>1
            ],
            [
                'name'=>'Toys & Games',
                'status'=>1
            ],
            [
                'name'=>'Books & Media',
                'status'=>1
            ],
            [
                'name'=>'Automotive',
                'status'=>1
            ],
            [
                'name'=>'Pet Supplies',
                'status'=>1
            ],
            [
                'name'=>'Office Supplies',
                'status'=>1
            ],
            [
                'name'=>'Groceries & Gourmet Food',
                'status'=>1
            ],
            [
                'name'=>'Baby Products',
                'status'=>1
            ],
            [
                'name'=>'Tools & Home Improvement',
                'status'=>1
            ],
            [
                'name'=>'Jewelry',
                'status'=>1
            ]      


        ];

        foreach ($categories as $key => $category) {
            Category::create($category);
        }
    }
}
