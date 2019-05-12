<?php

namespace App\Services\StudySet;

use App\Enums\StudySetRole;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class StudySetParticipantService
{
    public static function getOwnerIdCacheKey($study_set_id)
    {
        return 'study_set_' . $study_set_id . '_owner_id';
    }

    public static function getOwnerId($study_set_id)
    {
        return Cache::rememberForever(self::getOwnerIdCacheKey($study_set_id), function () use ($study_set_id) {
            $user_study_set_owner = DB::table('user_study_sets')->where([
                ['study_set_id', '=', $study_set_id],
                ['role', '=', StudySetRole::OWNER]
            ])->first();

            if ($user_study_set_owner) {
                return $user_study_set_owner->user_id;
            }

            return 0;
        });
    }
}