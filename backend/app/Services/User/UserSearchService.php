<?php


namespace App\Services\User;

use App\Constants\CacheRemovalTags;
use App\User;
use Illuminate\Support\Facades\Cache;

class UserSearchService
{
    public static function getUserSearchCacheKey($query)
    {
        return 'user_search_by_query_' . $query;
    }

    public static function searchUserByQuery($query)
    {
        return Cache::tags([CacheRemovalTags::USER['SAVE']])->rememberForever(self::getUserSearchCacheKey($query), function () use ($query) {
            return User::searchByQuery([
                'multi_match' => [
                    'query' => $query,
                    'fields' => ['name', 'username'],
                    'fuzziness' => 'AUTO'
                ]
            ]);
        });
    }
}