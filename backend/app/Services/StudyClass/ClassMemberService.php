<?php


namespace App\Services\StudyClass;


use Illuminate\Support\Facades\Cache;

class ClassMemberService
{
    public static function getAllMembersCacheKey($study_class_id)
    {
        return 'class_' . $study_class_id . '_all_members';
    }

    public static function getAllMembers($study_class_id)
    {
        $found_study_class = ClassManagementService::findStudyClass($study_class_id);

        return $found_study_class->users;
    }
}