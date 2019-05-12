<?php


namespace App\Services\User;


use App\Constants\CacheRemovalTags;
use App\User;
use Illuminate\Support\Facades\Cache;

class UserManagementService
{
    public static function getUserCacheKey($user_id)
    {
        return 'user_' . $user_id . '_info';
    }

    public static function getPublicUserInfoCacheKey($user_id)
    {
        return 'minified_user_' . $user_id . '_info';
    }

    public static function getUser($user_id)
    {
        return Cache::rememberForever(self::getUserCacheKey($user_id), function () use ($user_id) {
            return User::findOrFail($user_id);
        });
    }

    public static function getPublicUserInfo($user_id)
    {
        return Cache::rememberForever(self::getUserCacheKey($user_id), function () use ($user_id) {
            $user = User::findOrFail($user_id);

            unset($user->created_at);
            unset($user->updated_at);
            unset($user->language);
            unset($user->username);

            return $user;
        });
    }
}