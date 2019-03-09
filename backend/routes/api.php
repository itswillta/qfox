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

Route::get('/hello', function() {
    $helloObject = new stdClass();
    $helloObject->msg = "Hello world!";
    return json_encode($helloObject);
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
