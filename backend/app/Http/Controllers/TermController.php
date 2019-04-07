<?php

namespace App\Http\Controllers;

use App\StudySet;
use App\Term;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Services\RequestValidator;
use App\Services\ResourceUpdater;
use App\Services\Term\TermManagementService;
use DB;

class TermController extends Controller
{
    public function create(Request $request, $user_id, $study_set_id)
    {
        TermManagementService::create($request->all(), $study_set_id);
        return response()->noContent(Response::HTTP_CREATED);
    }

    public function update(Request $request, $user_id, $study_set_id, $term_id)
    {
        RequestValidator::validateOrFail($request->all(), [
            'term' => 'string',
            'definition' => 'string',
            'is_starred' => 'boolean'
        ]);

        $term = Term::findOrFail($term_id);

        $is_anything_updated = ResourceUpdater::update($request->all(), $term);

        return response()->noContent($is_anything_updated ? Response::HTTP_OK : Response::HTTP_NOT_MODIFIED);
    }

    public function delete($user_id, $study_set_id, $term_id)
    {
        $term = Term::findOrFail($term_id);
        $term->delete();

        return response()->noContent(Response::HTTP_OK);
    }
}
