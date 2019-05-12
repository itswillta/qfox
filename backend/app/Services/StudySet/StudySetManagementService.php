<?php


namespace App\Services\StudySet;


use App\Constants\CacheRemovalTags;
use App\Services\Term\TermManagementService;
use App\Services\User\UserManagementService;
use DB;
use Illuminate\Support\Facades\Cache;

class StudySetManagementService
{
    public static function getFullStudySetCacheKey($study_set_id)
    {
        return 'full_study_set_' . $study_set_id;
    }

    public static function getFullStudySet($study_set_id)
    {
        return Cache::rememberForever(self::getFullStudySetCacheKey($study_set_id), function () use ($study_set_id) {
                $study_set = DB::table('user_study_sets')
                    ->select('study_sets.id', 'title', 'role', 'view_permission', 'edit_permission', 'study_sets.created_at', 'study_sets.updated_at')
                    ->join('study_sets', 'study_sets.id', '=', 'user_study_sets.study_set_id')
                    ->where('study_sets.id', '=', $study_set_id)
                    ->groupBy('study_sets.id', 'user_id')
                    ->first();

                $study_set->owner = UserManagementService::getPublicUserInfo(StudySetParticipantService::getOwnerId($study_set->id));
                $study_set->terms = TermManagementService::getStudySetTerms($study_set->id);
                
                return $study_set;
            });
    }
}