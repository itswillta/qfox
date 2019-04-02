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
    'middleware' => 'api',
    'prefix' => 'auth'
], function () {
    Route::post('login', 'Auth\LoginController@login');
    Route::post('register', 'Auth\RegisterController@register');
});

Route::group(['middleware' => ['api', 'jwt.auth']], function () {
    Route::group(['prefix' => 'users'], function () {
        Route::put('/{user_id}', 'UserController@update');
    });

    Route::group(['prefix' => 'users/{user_id}/classes'], function () {
        Route::post('', 'ClassController@create');
        Route::put('/{class_id}', 'ClassController@update');
        Route::post('/{class_id}/study-sets', 'ClassController@addStudySet');
        Route::delete('/{class_id}', 'ClassController@delete');
        Route::post('/{class_id}/members', 'ClassController@addMember');
        Route::delete('/{class_id}/members', 'ClassController@removeMembers');
        Route::delete('/{class_id}/study-sets', 'ClassController@removeStudySets');
    });

    Route::group(['prefix' => 'users/{user_id}/study-sets'], function () {
        Route::post('', 'StudySetController@create');
        Route::put('/{study_set_id}', 'StudySetController@update');
        Route::delete('/{study_set_id}', 'StudySetController@delete');
    });

    Route::group(['prefix' => 'study-sets/{study_set_id}/terms'], function () {
        Route::post('', 'TermController@create');
        Route::put('/{term_id}', 'TermController@update');
        Route::delete('/{term_id}', 'TermController@delete');
    });
});
