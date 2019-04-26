<?php

namespace App\Observers;

use App\Constants\CacheRemovalTags;
use App\StudySet;
use Illuminate\Support\Facades\Cache;

class StudySetObserver
{
    /**
     * Handle the study set "created" event.
     *
     * @param  StudySet  $studySet
     * @return void
     */
    public function created(StudySet $studySet)
    {
        Cache::tags([CacheRemovalTags::STUDY_SET['SAVE']])->flush();
    }

    /**
     * Handle the study set "updated" event.
     *
     * @param  StudySet  $studySet
     * @return void
     */
    public function updated(StudySet $studySet)
    {
        Cache::tags([CacheRemovalTags::STUDY_SET['SAVE']])->flush();
    }

    /**
     * Handle the study set "deleted" event.
     *
     * @param  StudySet  $studySet
     * @return void
     */
    public function deleted(StudySet $studySet)
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
