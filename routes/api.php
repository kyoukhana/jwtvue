<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'as'=>'api::',
    'namespace' =>'Api',
],function() {


    Route::post('auth',[
        'as'=>'auth.authenticate',
        'uses'=>'AuthController@login',
    ]);


});