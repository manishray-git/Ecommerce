<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\loginUserRequest;
use App\Http\Requests\RegisterUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function registerUser(RegisterUserRequest $request){
    
       $validatedData = $request->all();
       $validatedData['password'] = Hash::make( $validatedData['password']);
      $user = User::create($validatedData);
       return response()->json([
         'message'=>"User Created Successfully",
         'status'=>201,
         'token'=>$user->CreateToken($user->name . '-AuthToken')->plainTextToken,
       ]);
    }


    public function loginUser(loginUserRequest $request)
    {
         $validatedLoginUser = $request->all();
         $user = User::where('email',$validatedLoginUser['email'])->first();

         if(!$user ||  !Hash::check($validatedLoginUser['password'],$user->password)){

              return response()->json([
                  'message'=>"Invalid Credentials"
              ],401);
         }

         $token = $user->createToken($user->name.'-AuthToken')->plainTextToken;
         return response()->json([
            'access_token'=>$token
         ]);
    }


    public function logout(){   
        $user = auth()->user();
        if($user){
          $user->tokens()->delete();
          return response()->json([
            'message'=>"Logout successfully"
          ],200);
        }

        return response()->json([
          'message'=>"No authenticated user found"
        ],401);

    }
}
