<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->longText('description');
                $table->foreignId('subcategory')->references('id')->on('sub_categories')->onDelete('cascade')->onUpdate('cascade');
                $table->decimal('price',9,3);
                $table->decimal('disc_price',9,3);
                $table->integer('stock_quantity');
                $table->integer('size');
                $table->string('color');
                $table->string('brand');
                $table->string('images');
                $table->string('status');
                $table->string('rating');
                $table->string('review_count');
                $table->timestamps();
          
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
