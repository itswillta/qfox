<?php

namespace App\Observers;

use App\Constants\CacheRemovalTags;
use App\Services\StudySet\StudySetParticipantService;
use App\StudySet;
use Illuminate\Support\Facades\Cache;

class StudySetObserver
{
    /**
     * Handle the study set "created" event.
     *
     * @param  StudySet  $study_set
     * @return void
     */
    public function created(StudySet $study_set)
    {
        Cache::tags([CacheRemovalTags::STUDY_SET['SAVE']])->flush();
        Cache::forget(StudySetParticipantService::getOwnerIdCacheKey($study_set->id));
    }

    /**
     * Handle the study set "updated" event.
     *
     * @param  StudySet  $study_set
     * @return void
     */
    public function updated(StudySet $study_set)
    {
        Cache::tags([CacheRemovalTags::STUDY_SET['SAVE']])->flush();
        Cache::forget(StudySetParticipantService::getOwnerIdCacheKey($study_set->id));
    }

    /**
     * Handle the study set "deleted" event.
     *
     * @param  StudySet  $study_set
     * @return void
     */
    public function deleted(StudySet $study_set)
    {
        Cache::tags([CacheRemovalTags::STUDY_SET['DELETE']])->flush();
    }

    /**
     * Handle the study set "restored" event.
     *
     * @param  StudySet  $studySet
     * @return void
     */
    public function restored(StudySet $studySet)
    {
        //
    }

    /**
     * Handle the study set "force deleted" event.
     *
     * @param  StudySet  $studySet
     * @return void
     */
    public function forceDeleted(StudySet $studySet)
    {
        //
    }
}
