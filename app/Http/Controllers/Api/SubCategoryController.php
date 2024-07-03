<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\SubCategoryRequest;
use App\Repositories\Interfaces\SubCategoryRepositoryInterfaces;



class SubCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */

     protected $SubCategoryRepository;

     public function __construct(SubCategoryRepositoryInterfaces $SubCategoryRepository){
        $this->SubCategoryRepository = $SubCategoryRepository;

     }
    public function index()
    {
       return  $this->SubCategoryRepository->all();
    }
   

    /**
     * Store a newly created resource in storage.
     */
    public function store(SubCategoryRequest $request)
    {
        $this->SubCategoryRepository->create($request->all());
        return response()->json([
           "message"=> "Subcategory created successfully"
        ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return $subCategory = $this->SubCategoryRepository->find($id);

    }

    /**
     * Show the form for editing the specified resource.
     */
  

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $this->SubCategoryRepository->update($request->all(),$id);

        return response()->json([
          'message'=>"Subcategory updated successfully"
        ],200);
    
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->SubCategoryRepository->delete($id);
        return response()->json([
            "message"=> "Subcategory deleted successfully"
        ],200);
    }
}
