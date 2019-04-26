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
     * @param  StudyClass  $studyClass
     * @return void
     */
    public function created(StudyClass $studyClass)
    {
        Cache::forget(ClassParticipantService::getOwnerIdCacheKey($studyClass->id));
    }

    /**
     * Handle the study class "updated" event.
     *
     * @param  StudyClass  $studyClass
     * @return void
     */
    public function updated(StudyClass $studyClass)
    {
        Cache::forget(ClassParticipantService::getOwnerIdCacheKey($studyClass->id));
        Cache::forget(ClassParticipantService::getAdminIdsCacheKey($studyClass->id));
    }

    /**
     * Handle the study class "deleted" event.
     *
     * @param  StudyClass  $studyClass
     * @return void
     */
    public function deleted(StudyClass $studyClass)
    {
        Cache::forget(ClassParticipantService::getOwnerIdCacheKey($studyClass->id));
        Cache::forget(ClassParticipantService::getAdminIdsCacheKey($studyClass->id));
    }

    /**
     * Handle the study class "restored" event.
     *
     * @param  StudyClass  $studyClass
     * @return void
     */
    public function restored(StudyClass $studyClass)
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
