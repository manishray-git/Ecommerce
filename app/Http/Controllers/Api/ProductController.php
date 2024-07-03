<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Interfaces\ProductRepositoryInterface;
use App\Repositories\ProductRepository;
use App\Events\ProductCreated;
use App\Notifications\UserNotification;
use Illuminate\Support\Facades\Notification;
use App\Models\User;


class ProductController extends Controller
{

    private $productRepository;
    public function __construct(ProductRepositoryInterface $productRepository)
    {
        $this->productRepository = $productRepository;
    }


    public function index(){
        return $this->productRepository->all();
    }

    public function store(Request $request){

     $data =    $this->productRepository->store($request->all());
     $user = User::where('name','manish')->first();
     Notification::send($user, new UserNotification());

    //  event(new ProductCreated($data));
     return response()->json([
         'message'=>"Product Created successfully"
        ]);
    }


    public function edit($id){
      return $this->productRepository->find($id);
    }

    public function update($id){
        $this->productRepository->update(request()->all(),$id);
    }


    public function delete($id){
        $this->productRepository->delete($id);
        return response()->json([
            'message'=>"Product deleted successfully"
        ]);
    }
}
