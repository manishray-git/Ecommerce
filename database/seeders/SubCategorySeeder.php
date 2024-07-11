<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubCategory;

class SubCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subCategories = [
            [
                'category_id' => 1,
                'name' => 'Mobile Phones',
                'status' => 1
            ],
            [
                'category_id' => 1,
                'name' => 'Laptops & Computers',
                'status' => 1
            ],
            [
                'category_id' => 1,
                'name' => 'Cameras',
                'status' => 1
            ],
            [
                'category_id' => 1,
                'name' => 'Televisions',
                'status' => 1
            ],
            [
                'category_id' => 1,
                'name' => 'Audio & Headphones',
                'status' => 1
            ],
            [
                'category_id' => 1,
                'name' => 'Wearable Technology',
                'status' => 1
            ],
            [
                'category_id' => 2,
                'name' => 'Men’s Clothing',
                'status' => 1
            ],
            [
                'category_id' => 2,
                'name' => 'Women’s Clothing',
                'status' => 1
            ],
            [
                'category_id' => 2,
                'name' => 'Shoes',
                'status' => 1
            ],
            [
                'category_id' => 2,
                'name' => 'Accessories',
                'status' => 1
            ],
            [
                'category_id' => 2,
                'name' => 'Jewelry',
                'status' => 1
            ],
            [
                'category_id' => 2,
                'name' => 'Watches',
                'status' => 1
            ],
            [
                'category_id' => 3,
                'name' => 'Furniture',
                'status' => 1
            ],
            [
                'category_id' => 3,
                'name' => 'Home Decor',
                'status' => 1
            ],
            [
                'category_id' => 3,
                'name' => 'Kitchen Appliances',
                'status' => 1
            ],
            [
                'category_id' => 3,
                'name' => 'Bedding',
                'status' => 1
            ],
            [
                'category_id' => 3,
                'name' => 'Bath',
                'status' => 1
            ],
            [
                'category_id' => 3,
                'name' => 'Storage & Organization',
                'status' => 1
            ],


            [
                'category_id' => 4,
                'name' => 'Skincare',
                'status' => 1
            ],
            [
                'category_id' => 4,
                'name' => 'Haircare',
                'status' => 1
            ],
            [
                'category_id' => 4,
                'name' => 'Makeup',
                'status' => 1
            ],
            [
                'category_id' => 4,
                'name' => 'Fragrances',
                'status' => 1
            ],
            [
                'category_id' => 4,
                'name' => 'Personal Hygiene',
                'status' => 1
            ],

            [
                'category_id' => 5,
                'name' => 'Supplements',
                'status' => 1
            ],
            [
                'category_id' => 5,
                'name' => 'Fitness Equipment',
                'status' => 1
            ],
            [
                'category_id' => 5,
                'name' => 'Personal Care Devices',
                'status' => 1
            ],
            [
                'category_id' => 5,
                'name' => 'Health Monitors',
                'status' => 1
            ],
            [
                'category_id' => 6,
                'name' => 'Outdoor Gear',
                'status' => 1
            ],
            [
                'category_id' => 6,
                'name' => 'Exercise Equipment',
                'status' => 1
            ],
            [
                'category_id' => 6,
                'name' => 'Athletic Clothing',
                'status' => 1
            ],
            [
                'category_id' => 6,
                'name' => 'Camping & Hiking Gear',
                'status' => 1
            ],
            [
                'category_id' => 7,
                'name' => 'Action Figures',
                'status' => 1
            ],
            [
                'category_id' => 7,
                'name' => 'Dolls',
                'status' => 1
            ],
            [
                'category_id' => 7,
                'name' => 'Educational Toys',
                'status' => 1
            ],
            [
                'category_id' => 7,
                'name' => 'Board Games',
                'status' => 1
            ],
            [
                'category_id' => 7,
                'name' => 'Video Games',
                'status' => 1
            ],
            [
                'category_id' => 8,
                'name' => 'Fiction',
                'status' => 1
            ],
            [
                'category_id' => 8,
                'name' => 'Non-Fiction',
                'status' => 1
            ],
            [
                'category_id' => 8,
                'name' => 'eBooks',
                'status' => 1
            ],
            [
                'category_id' => 8,
                'name' => 'Music',
                'status' => 1
            ],
            [
                'category_id' => 8,
                'name' => 'Movies',
                'status' => 1
            ],
            [
                'category_id' => 9,
                'name' => 'Car Accessories',
                'status' => 1
            ],
            [
                'category_id' => 9,
                'name' => 'Motorcycle Gear',
                'status' => 1
            ],
            [
                'category_id' => 9,
                'name' => 'Tools & Equipment',
                'status' => 1
            ],
            [
                'category_id' => 9,
                'name' => 'Car Care',
                'status' => 1
            ],
            [
                'category_id' => 10,
                'name' => 'Pet Food',
                'status' => 1
            ],
            [
                'category_id' => 10,
                'name' => 'Pet Toys',
                'status' => 1
            ],
            [
                'category_id' => 10,
                'name' => 'Pet Grooming',
                'status' => 1
            ], [
                'category_id' => 10,
                'name' => 'Pet Health',
                'status' => 1
            ],, [
                'category_id' => 11,
                'name' => 'Stationery',
                'status' => 1
            ],
            [
                'category_id' => 11,
                'name' => 'Office Electronics',
                'status' => 1
            ],
            [
                'category_id' => 11,
                'name' => 'Office Furniture',
                'status' => 1
            ],
            [
                'category_id' => 11,
                'name' => 'Storage Solutions',
                'status' => 1
            ],
            [
                'category_id' => 12,
                'name' => 'Fresh Produce',
                'status' => 1
            ],
            [
                'category_id' => 12,
                'name' => 'Snacks',
                'status' => 1
            ],
            [
                'category_id' => 12,
                'name' => 'Beverages',
                'status' => 1
            ],
            [
                'category_id' => 12,
                'name' => 'Organic Foods',
                'status' => 1
            ],
            [
                'category_id' => 12,
                'name' => 'Gourmet Gifts',
                'status' => 1
            ],


            [
                'category_id' => 13,
                'name' => 'Baby Clothing',
                'status' => 1
            ],

            [
                'category_id' => 13,
                'name' => 'Diapers',
                'status' => 1
            ],

            [
                'category_id' => 13,
                'name' => 'Baby Gear',
                'status' => 1
            ],
            [
                'category_id' => 13,
                'name' => 'Toys for Babies',
                'status' => 1
            ],
            [
                'category_id' => 13,
                'name' => 'Baby Care',
                'status' => 1
            ],
            [
                'category_id' => 14,
                'name' => 'Power Tools',
                'status' => 1
            ],
            [
                'category_id' => 14,
                'name' => 'Hand Tools',
                'status' => 1
            ], [
                'category_id' => 14,
                'name' => 'Lighting',
                'status' => 1
            ],
            [
                'category_id' => 14,
                'name' => 'Plumbing Supplies',
                'status' => 1
            ], [
                'category_id' => 14,
                'name' => 'Safety Equipment',
                'status' => 1
            ],, [
                'category_id' => 15,
                'name' => 'Rings',
                'status' => 1
            ],
            [
                'category_id' => 15,
                'name' => 'Necklaces',
                'status' => 1
            ],
            [
                'category_id' => 15,
                'name' => 'Earrings',
                'status' => 1
            ],
            [
                'category_id' => 15,
                'name' => 'Bracelets',
                'status' => 1
            ],
            [
                'category_id' => 15,
                'name' => 'Watches',
                'status' => 1
            ]

        ];

        foreach ($subCategories as $key => $subcategory) {
            SubCategory::create($subcategory);
        }
    }
}
