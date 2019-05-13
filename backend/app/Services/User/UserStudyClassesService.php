<?php


namespace App\Services\User;


use App\Constants\CacheRemovalTags;
use App\Services\StudyClass\ClassParticipantService;
use DB;
use Illuminate\Support\Facades\Cache;

class UserStudyClassesService
{
    public static function getAllStudyClassesCacheKey($user_id)
    {
        return 'user_' . $user_id . '_all_study_classes';
    }

    public static function getAllStudyClasses($user_id, $options)
    {
        $options = (object)$options;

        $study_classes = DB::table('user_classes')
            ->select('study_classes.id', 'study_classes.name', 'study_classes.description', 'role', 'study_classes.created_at', 'study_classes.updated_at',
                DB::raw('count(study_set_classes.study_set_id) as total_study_sets'), DB::raw('count(distinct(user_classes.user_id)) as total_members'))
            ->join('study_classes', 'study_classes.id', '=', 'user_classes.class_id')
            ->leftJoin('study_set_classes', 'study_classes.id', '=', 'study_set_classes.class_id')
            ->where('user_id', '=', $user_id)
            ->groupBy('study_classes.id' , 'user_classes.user_id')
            ->orderBy($options->order_by, $options->order_direction)
            ->get()->toArray();

        foreach ($study_classes as &$study_class) {
            $study_class->owner = UserManagementService::getPublicUserInfo(ClassParticipantService::getOwnerId($study_class->id));
        }

        return $study_classes;
    }
}