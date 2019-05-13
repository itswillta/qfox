<?php


namespace App\Services\StudyClass;

use App\Constants\CacheRemovalTags;
use App\Services\User\UserManagementService;
use App\StudyClass;
use DB;
use Illuminate\Support\Facades\Cache;

class ClassManagementService
{
    public static function getFullStudyClassCacheKey($study_class_id)
    {
        return 'full_study_class_' . $study_class_id;
    }

    public static function getFullStudyClass($study_class_id)
    {
        $study_class = DB::table('user_classes')
            ->select('study_classes.id', 'study_classes.name', 'study_classes.description', 'role', 'study_classes.created_at', 'study_classes.updated_at')
            ->join('study_classes', 'study_classes.id', '=', 'user_classes.class_id')
            ->where('study_classes.id', '=', $study_class_id)
            ->groupBy('study_classes.id', 'user_id')
            ->first();

        $study_class->owner = UserManagementService::getPublicUserInfo(ClassParticipantService::getOwnerId($study_class->id));
        $study_class->studySets = ClassStudySetService::getAllStudySets($study_class->id);
        $study_class->members = ClassMemberService::getAllMembers($study_class->id);

        return $study_class;
    }

    public static function getFindStudyClassCacheKey($study_class_id)
    {
        return 'study_class_' . $study_class_id . '_info';
    }

    public static function findStudyClass($study_class_id)
    {
        return Cache::tags([CacheRemovalTags::STUDY_CLASS['SAVE'], CacheRemovalTags::STUDY_CLASS['DELETE']])
            ->rememberForever(self::getFindStudyClassCacheKey($study_class_id), function () use ($study_class_id) {
                return StudyClass::findOrFail($study_class_id);
            });
    }
}