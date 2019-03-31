<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseFormatter;
use App\StudySet;
use App\Term;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use DB;

class TermController extends Controller
{
    public function create(Request $request, $study_set_id)
    {
        $validator = Validator::make($request->all(), [
            'term' => 'required|string',
            'definition' => 'required|string'
        ]);

        if ($validator->fails()) {
            $details = ResponseFormatter::flattenValidatorErrors($validator);

            return response()->json([
                'error' => [
                    'code' => Response::HTTP_BAD_REQUEST,
                    'message' => 'Failed to create term. Please check your term information.',
                    'details' => (object)$details
                ]
            ], Response::HTTP_BAD_REQUEST);
        }

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
        $validator = Validator::make($request->all(), [
            'term' => 'string',
            'definition' => 'string',
            'is_starred' => 'boolean'
        ]);

        if ($validator->fails()) {
            $details = ResponseFormatter::flattenValidatorErrors($validator);

            return response()->json([
                'error' => [
                    'code' => Response::HTTP_BAD_REQUEST,
                    'message' => 'Failed to update term. Please check your term information.',
                    'details' => (object)$details
                ]
            ], Response::HTTP_BAD_REQUEST);
        }

        $term = Term::findOrFail($term_id);

        if ($request->term) {
            $term->term = $request->term;
        }

        if ($request->definition) {
            $term->definition = $request->definition;
        }

        if ($request->is_starred) {
            $term->is_starred = $request->is_starred;
        }

        $term->save();

        return response()->json([
            'code' => Response::HTTP_OK,
            'message' => 'Successfully updated term.',
            'details' => $term
        ]);

    }
}
