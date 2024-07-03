<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'subcategory',
        'price',
        'disc_price',
        'stock_quantity',
        'size',
        'color',
        'brand',
        'images',
        'status',
        'rating',
        'review_count'
    ];
}
