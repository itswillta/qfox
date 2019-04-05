<?php

namespace App\Services\StudySet;

use App\Enums\StudySetRole;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class StudySetParticipantService
{
    public static function getOwnerId($study_set_id)
    {
        return Cache::rememberForever('study_set_' . $study_set_id . '_owner_id', function () use ($study_set_id) {
            return DB::table('user_study_sets')->where([
                ['study_set_id', '=', $study_set_id],
                ['role', '=', StudySetRole::OWNER]
            ])->first()->user_id;
        });
    }
}