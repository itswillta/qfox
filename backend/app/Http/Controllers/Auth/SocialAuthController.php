<?php


namespace App\Http\Controllers\Auth;

use App\User;
use Illuminate\Http\Request;
use App\Providers\SocialAccountService;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Laravel\Socialite\Facades\Socialite;
use stdClass;

class SocialAuthController
{

    public function redirect($social)
    {
        return Socialite::driver($social)->redirect();
    }

    public function callback($social)
    {

        $userProvider = Socialite::driver($social)->user();

        $user = User::where('facebook_id', '=', $userProvider->getId())->first();

        if($user){
            return response()->json([
                'authToken' => $userProvider->token,
                'expires' => $userProvider->expiresIn
            ], Response::HTTP_OK);
        }
        else{
            $user = new User();
            $user->username = $userProvider->getEmail();
            $user->name = $userProvider->getName();
            $user->facebook_id = $userProvider->getId();
            $user->profile_picture_url = $userProvider->getAvatar();
            $user->language = "en";
            $user->save();

            $token = auth()->claims(['userProfile' => $user])->login($user);
            $ttl = auth()->factory()->getTTL() * 60;

            return response()->json([
                'authToken' => $token,
                'expires' => $ttl
            ], Response::HTTP_OK);
        }

    }
}