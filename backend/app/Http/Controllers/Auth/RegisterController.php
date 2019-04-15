<?php

namespace App\Http\Controllers\Auth;

use App\Services\ResponseFormatter;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Services\RequestValidator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function register(Request $request)
    {
        RequestValidator::validateOrFail($request->all(),
            [
                'username' => 'unique:users|required|string|between:6,15',
                'name' => 'required|string|between:4,30',
                'password' => 'required|string|min:6'
            ],
            [
                'username.unique' => 'Username already exists.'
            ]
        );

        $user = new User();
        $user->username = $request->username;
        $user->name = $request->name;
        $user->password = bcrypt($request->password);
        $user->profile_picture_url = "";
        $user->language = "en";
        $user->save();
        $user->addToIndex();

        return response()->noContent(Response::HTTP_CREATED);
    }
}
