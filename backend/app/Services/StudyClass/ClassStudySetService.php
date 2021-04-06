<?php


namespace App\Services\StudyClass;


use App\Constants\FetchOptions;
use App\StudyClass;
use App\Constants\CacheRemovalTags;
use App\Services\StudySet\StudySetParticipantService;
use App\Services\User\UserManagementService;
use DB;
use Illuminate\Support\Facades\Cache;

class ClassStudySetService
{
    public static function getAllStudySetsCacheKey($study_class_id)
    {
        return 'class_' . $study_class_id . '_all_study_sets';
    }

    public static function getAllStudySets($study_class_id)
    {
        $study_sets = DB::table('study_set_classes')
            ->select('study_sets.id', 'title', 'view_permission', 'edit_permission', 'study_sets.created_at', 'study_sets.updated_at', DB::raw('count(terms.id) as total_terms'))
            ->join('study_sets', 'study_sets.id', '=', 'study_set_classes.study_set_id')
            ->leftJoin('terms', 'terms.study_set_id', '=', 'study_sets.id')
            ->where('class_id', '=', $study_class_id)
            ->groupBy('study_sets.id', 'class_id')
            ->orderBy(FetchOptions::DEFAULT_ORDER_BY, FetchOptions::DEFAULT_ORDER_DIRECTION)
            ->get()->toArray();

        foreach ($study_sets as &$study_set) {
            $study_set->owner = UserManagementService::getPublicUserInfo(StudySetParticipantService::getOwnerId($study_set->id));
        }

        return $study_sets;
    }
}