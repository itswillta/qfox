<?php

namespace App\Services\Term;

use App\Term;
use App\Services\RequestValidator;

class TermManagementService
{
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