<?php

namespace App\Http\Controllers\Auth;

use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use App\User;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $username = $request->input('username');
        $password = $request->input('password');

        $user = User::where('username', '=', $username)->first();

        if (!$user) {
            $error = [
                "code" => 400, 
                "message" => 'Authentication failed. Please check your credentials.', 
                "details" => [
                    "username" => "Username doesn't exist."
                ]
            ];

            return response()->json($error,Response::HTTP_BAD_REQUEST);
        }

        if (!Hash::check($password, $user->password)) {
            $error = [
                "code" => 400, 
                "message" => 'Authentication failed. Please check your credentials.', 
                "details" => [
                    "password" => "Password incorrect."
                ]
            ];

            return response()->json($error,Response::HTTP_BAD_REQUEST);
        }

        // FIXME: Needs to fix this (using auth()) + get time to live + edit TTL
        // JWTAuth::setTTL(60);
        $token = JWTAuth::fromUser($user);

        return response()->json(
        [
            'authToken' => $token, 
            'expires' => 60
        ], Response::HTTP_OK);
    }
}