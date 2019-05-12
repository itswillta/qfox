<?php

use App\Http\Middleware\ValidateUserPermission;
use App\Http\Middleware\StudyClass\ValidateClassEditPermission;
use App\Http\Middleware\StudySet\ValidateSetEditPermission;
use App\Http\Middleware\Term\ValidateTermEditPermission;
use App\Http\Middleware\StudySet\ValidateSetViewPermission;

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
    Route::post('/auth/re-login', 'Auth\LoginController@reLogin');

    Route::group(['prefix' => 'users'], function () {
        Route::get('/search', 'UserController@search');
        Route::group(['middleware' => ValidateUserPermission::class], function () {
            Route::put('/{user_id}', 'UserController@update');
            Route::get('/{user_id}/classes', 'UserController@getStudyClasses');
            Route::get('/{user_id}/study-sets', 'UserController@getStudySets');
        });
    });

    Route::group(['middleware' => ValidateUserPermission::class, 'prefix' => 'users/{user_id}/classes'], function () {
        Route::post('', 'ClassController@create');
        Route::get('/search', 'ClassController@search');
        Route::group(['middleware' => ValidateClassEditPermission::class], function () {
            Route::put('/{class_id}', 'ClassController@update');
            Route::post('/{class_id}/study-sets', 'ClassController@addStudySet');
            Route::delete('/{class_id}', 'ClassController@delete');
            Route::post('/{class_id}/members', 'ClassController@addMember');
            Route::delete('/{class_id}/members', 'ClassController@removeMembers');
            Route::delete('/{class_id}/study-sets', 'ClassController@removeStudySets');
        });
    });

    Route::group(['middleware' => ValidateUserPermission::class, 'prefix' => 'users/{user_id}/study-sets'], function () {
        Route::post('', 'StudySetController@create');
        Route::get('/search', 'StudySetController@search');
        Route::group(['middleware' => ValidateSetEditPermission::class], function () {
            Route::put('/{study_set_id}', 'StudySetController@update');
            Route::delete('/{study_set_id}', 'StudySetController@delete');
        });
    });

    Route::group(['middleware' => ValidateSetEditPermission::class, 'prefix' => 'users/{user_id}/study-sets/{study_set_id}/terms'], function () {
        Route::post('', 'TermController@create');
        Route::group(['middleware' => ValidateTermEditPermission::class], function () {
            Route::put('/{term_id}', 'TermController@update');
            Route::delete('/{term_id}', 'TermController@delete');
        });
    });
});

Route::group(['middleware' => ValidateSetViewPermission::class, 'prefix' => 'users/{user_id}/study-sets/{study_set_id}'], function () {
    Route::get('', 'StudySetController@getOne');
    Route::get('/terms', 'StudySetController@getAllTerms');
});
