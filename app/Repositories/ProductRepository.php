<?php

namespace App\Repositories;

use App\Repositories\Interfaces\ProductRepositoryInterface;
use App\Models\Product;

class ProductRepository implements ProductRepositoryInterface{
    public function all(){
       return    Product::all();
    }

    public function store($data){

       return Product::create($data);
    
    }

    public function find($id){
         return Product::where('id',$id)->first();
    }


    public function update($data,$id){
        Product::where('id',$id)->update($data);

    }

    public function delete($id){
        Product::where('id',$id)->delete();
    }
}