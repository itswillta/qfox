<?php

namespace App\Observers;

use App\Services\Term\TermManagementService;
use App\Term;
use Illuminate\Support\Facades\Cache;

class TermObserver
{
    /**
     * Handle the term "created" event.
     *
     * @param  \App\Term  $term
     * @return void
     */
    public function created(Term $term)
    {
        Cache::forget(TermManagementService::getStudySetTermsCacheKey($term->study_set_id));
    }

    /**
     * Handle the term "updated" event.
     *
     * @param  \App\Term  $term
     * @return void
     */
    public function updated(Term $term)
    {
        Cache::forget(TermManagementService::getStudySetTermsCacheKey($term->study_set_id));
    }

    /**
     * Handle the term "deleted" event.
     *
     * @param  \App\Term  $term
     * @return void
     */
    public function deleted(Term $term)
    {
        Cache::forget(TermManagementService::getStudySetTermsCacheKey($term->study_set_id));
    }

    /**
     * Handle the term "restored" event.
     *
     * @param  \App\Term  $term
     * @return void
     */
    public function restored(Term $term)
    {
        //
    }

    /**
     * Handle the term "force deleted" event.
     *
     * @param  \App\Term  $term
     * @return void
     */
    public function forceDeleted(Term $term)
    {
        //
    }
}
