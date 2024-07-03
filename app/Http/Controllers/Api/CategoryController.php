<?php

namespace App\Http\Controllers\Api;

use App\Events\CategoryCreated;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Interfaces\CategoryRepositoryInterface;
use App\Http\Requests\CategoryRequest;


class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    protected $categoryRepository;

    public function __construct(CategoryRepositoryInterface $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }
    public function index()
    {
        return $this->categoryRepository->all();

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryRequest $request)
    {
        $this->categoryRepository->create($request->all());
        return response()->json([
            'message' => "Category created successfully"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
       $this->categoryRepository->find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
      $this->categoryRepository->update($request->all(), $id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
         $this->categoryRepository->delete($id);
    }
}
