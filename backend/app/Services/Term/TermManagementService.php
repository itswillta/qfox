<?php

namespace App\Services\Term;

use App\Constants\CacheRemovalTags;
use App\Services\StudySet\StudySetParticipantService;
use App\Services\User\UserManagementService;
use App\Term;
use App\Services\RequestValidator;
use DB;
use Illuminate\Support\Facades\Cache;

class TermManagementService
{
    public static function getStudySetTermsCacheKey($study_set_id)
    {
        return 'study_set' . $study_set_id . 'terms';
    }

    public static function getStudySetTerms($study_set_id)
    {
        return Cache::rememberForever(self::getStudySetTermsCacheKey($study_set_id), function () use ($study_set_id) {
            return DB::table('terms')
                ->select('id', 'term', 'definition', 'created_at', 'updated_at')
                ->where('terms.study_set_id', '=', $study_set_id)
                ->get()->toArray();
        });
    }

    public static function create($term_info, $study_set_id)
    {
        RequestValidator::validateOrFail($term_info, [
            'term' => 'required|string',
            'definition' => 'required|string'
        ]);

        $term = new Term();

        $term->term = $term_info['term'];
        $term->definition = $term_info['definition'];
        $term->is_starred = false;

        $term->study_set_id = $study_set_id;
        $term->save();
    }
}