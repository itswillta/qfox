<?php

namespace App\Http\Controllers\Auth;

use App\Http\ApiErrorResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use App\User;
use App\Services\RequestValidator;

class LoginController extends Controller
{
    const TIME_TO_LIVE = 1440; // 1440 minutes = 1 day

    public function login(Request $request)
    {
        RequestValidator::validateOrFail($request->all(), [
            'username' => 'required|string',
            'password' => 'required|string'
        ]);

        $username = $request->username;
        $password = $request->password;

        $user = User::where('username', '=', $username)->first();

        if (!$user) {
            return response()->json(
                ApiErrorResponse::generate(
                    Response::HTTP_BAD_REQUEST,
                    'Authentication failed. Please check your credentials.',
                    ['username' => "Username doesn't exist."]
                ), Response::HTTP_BAD_REQUEST
            );
        }

        if (!Hash::check($password, $user->password)) {
            return response()->json(
                ApiErrorResponse::generate(
                    Response::HTTP_BAD_REQUEST,
                    'Authentication failed. Please check your credentials.',
                    ['password' => 'Password incorrect.']
                ), Response::HTTP_BAD_REQUEST
            );
        }

        $token = auth()->login($user);
        auth()->factory()->setTTL(self::TIME_TO_LIVE);
        $ttl = auth()->factory()->getTTL() * 60;

        return response()->json([
            'authToken' => $token,
            'expiresIn' => $ttl
        ], Response::HTTP_OK);
    }
}
