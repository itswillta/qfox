<?php


namespace App\Services\Term;

use App\Term;
use Illuminate\Support\Facades\Cache;

class TermPermissionService
{
    public static function getParentStudySetId($term_id)
    {
        return Cache::rememberForever('term_' . $term_id . '_study_set_id', function () use ($term_id) {
            return Term::findOrFail($term_id)->study_set_id;
        });
    }
}