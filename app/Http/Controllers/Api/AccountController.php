<?php

namespace App\Http\Controllers\Api;

Use Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AccountController extends Controller
{
    public function show()
    {
        $user=Auth::user();
        return response([
            'status' => 'success',
            'data' => $user
        ]);

    }

    /*Returns Roles from database */
    public function getRoles()
    {
        return Role::select('id as value', 'name')->get();
    }

    public function logout()
    {
        // JWTAuth::invalidate();
        return response([
            'status' => 'success',
            'msg' => 'Logged out Successfully.'
        ], 200);
    }
}
