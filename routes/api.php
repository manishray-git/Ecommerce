<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\SubCategoryController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


    Route::controller(UserController::class)->group(function () {
        Route::post('/register', 'registerUser')->name('register');
        Route::post('/login', 'loginUser')->name('login');
    });



Route::group(['middleware'=>['auth:sanctum']],function(){
    Route::apiResource('categories',CategoryController::class);
    Route::apiResource('subcategories',SubCategoryController::class);
    Route::apiResource('products',ProductController::class);
});
