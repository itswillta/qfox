<?php

namespace App\Http\Controllers;

use App\StudySet;
use App\Term;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Services\RequestValidator;
use App\Services\ResourceUpdater;
use DB;

class TermController extends Controller
{
    public function create(Request $request, $study_set_id)
    {
        RequestValidator::validateOrFail($request->all(), [
            'term' => 'required|string',
            'definition' => 'required|string'
        ]);

        $term = new Term();

        $term->term = $request->term;
        $term->definition = $request->definition;
        $term->is_starred = false;

        DB::transaction(function () use ($term, $study_set_id) {
            $study_set = StudySet::findOrFail($study_set_id);
            $term->study_set_id = $study_set->id;
            $term->save();
        });

        return response()->json([
            'message' => 'Successfully created term.',
            'details' => $term
        ], Response::HTTP_CREATED);
    }

    public function update(Request $request, $term_id)
    {
        RequestValidator::validateOrFail($request->all(), [
            'term' => 'string',
            'definition' => 'string',
            'is_starred' => 'boolean'
        ]);

        $term = Term::findOrFail($term_id);

        $is_anything_updated = ResourceUpdater::update($request, $term);

        return response()->json([
            'code' => Response::HTTP_OK,
            'message' => $is_anything_updated ? 'Successfully updated term.' : 'There is nothing to update.',
            'details' => $term
        ]);

    }

    public function delete($study_set_id, $term_id)
    {
        $term = Term::findOrFail($term_id);
        $term->delete();

        return response()->noContent(Response::HTTP_OK);
    }
}
