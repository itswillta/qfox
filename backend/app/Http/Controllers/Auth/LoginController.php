<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use App\User;
use App\Services\RequestValidator;

class LoginController extends Controller
{
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
            return response()->json([
                "error" => [
                    "code" => Response::HTTP_BAD_REQUEST,
                    "message" => 'Authentication failed. Please check your credentials.',
                    "details" => [
                        "username" => "Username doesn't exist."
                    ]
                ]
            ], Response::HTTP_BAD_REQUEST);
        }

        if (!Hash::check($password, $user->password)) {
            return response()->json([
                "error" => [
                    "code" => Response::HTTP_BAD_REQUEST,
                    "message" => 'Authentication failed. Please check your credentials.',
                    "details" => [
                        "password" => "Password incorrect."
                    ]
                ]
            ], Response::HTTP_BAD_REQUEST);
        }

        $userProfile = [
            'id' => $user->id,
            'name' => $user->name,
            'language' => $user->language,
            'profilePictureUrl' => $user->profile_picture_url
        ];

        $token = auth()->claims(['userProfile' => $userProfile])->login($user);
        $ttl = auth()->factory()->getTTL() * 60;

        return response()->json([
            'authToken' => $token,
            'expires' => $ttl
        ], Response::HTTP_OK);
    }
}
