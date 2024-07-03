<?php
namespace App\Repositories;

use App\Repositories\Interfaces\SubCategoryRepositoryInterfaces;
use App\Models\SubCategory;



class SubCategoryRepository implements SubCategoryRepositoryInterfaces
{

    public function all()
    {
        return SubCategory::all();
    }

    public function create($data)
    {
        SubCategory::create($data);
    }
    

    public function find($id){
       return  SubCategory::where("id",$id)->first();
    }


    public function update($data,$id){
        SubCategory::where("id",$id)->update($data);
    }


    public function delete($id){
        SubCategory::where("id",$id)->delete();
    }


}