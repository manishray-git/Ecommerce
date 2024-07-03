<?php

namespace App\Repositories;
use App\Repositories\Interfaces\CategoryRepositoryInterface;
use App\Models\Category;

class categoryRepository implements CategoryRepositoryInterface{
    public function all(){
        return Category::all();
    }

    public function create($data){
      return  Category::create($data);
    }


    public function find($id){

    }

    public function update($data,$id){

    }

    public  function delete($id){

    }
}