<?php

namespace App\Observers;

use App\Services\StudyClass\ClassParticipantService;
use App\StudyClass;
use Illuminate\Support\Facades\Cache;

class StudyClassObserver
{
    /**
     * Handle the study class "created" event.
     *
     * @param  StudyClass  $study_class
     * @return void
     */
    public function created(StudyClass $study_class)
    {
        Cache::forget(ClassParticipantService::getOwnerIdCacheKey($study_class->id));
    }

    /**
     * Handle the study class "updated" event.
     *
     * @param  StudyClass  $study_class
     * @return void
     */
    public function updated(StudyClass $study_class)
    {
        Cache::forget(ClassParticipantService::getOwnerIdCacheKey($study_class->id));
        Cache::forget(ClassParticipantService::getAdminIdsCacheKey($study_class->id));
    }

    /**
     * Handle the study class "deleted" event.
     *
     * @param  StudyClass  $study_class
     * @return void
     */
    public function deleted(StudyClass $study_class)
    {
        Cache::forget(ClassParticipantService::getOwnerIdCacheKey($study_class->id));
        Cache::forget(ClassParticipantService::getAdminIdsCacheKey($study_class->id));
    }

    /**
     * Handle the study class "restored" event.
     *
     * @param  StudyClass  $study_class
     * @return void
     */
    public function restored(StudyClass $study_class)
    {
        //
    }

    /**
     * Handle the study class "force deleted" event.
     *
     * @param  StudyClass  $studyClass
     * @return void
     */
    public function forceDeleted(StudyClass $studyClass)
    {
        //
    }
}
