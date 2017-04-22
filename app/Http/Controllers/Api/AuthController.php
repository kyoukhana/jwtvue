<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use JWTAuth;
use App\User;
use App\Role;
use Tymon\JWTAuth\Exceptions\JWTException;


class AuthController extends Controller
{
    public function authenticate(Request $request){
        $credentials=$request->only('email','password');

        try{

            if (! $token = JWTAuth::attempt([
                'email'   => $credentials['email'],
                'password'=> $credentials['password'],
                'activated' =>1
            ])){
                return response()->json(['error'=>'invalid_credentials'], 401);
            };


        } catch(JWTException $e){
            return response()->json(['error'=>'couldnt_not_create_token'], 500);
        }
        $dta= User::where(['email' => $request->get('email')])->select('role_id as roles','name','lastname','email')->get();

        $data=$dta[0];


        return response()->json(compact('token', 'data','status'));
    }

    public function login(Request $request)
    {
        $credentials=$request->only('email','password');
        $cred=[
            'email'   => $credentials['email'],
            'password'=> $credentials['password'],
            'activated'=> 1
        ];



        if ( ! $token = JWTAuth::attempt($cred)) {
            return response([
                'status' => 'error',
                'msg' => 'Invalid credentials.',
                'errors' => [
                    ['field' => 'email', 'rule' => 'auth', 'message' => 'Invalid credentials.'],
                    ['field' => 'password', 'rule' => 'auth', 'message' => 'Invalid credentials.']
                ]
            ], 400);
        }

        return response([
            'status' => 'success'
        ])->header('Authorization', $token);
    }
}
