<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseFormatter;
use App\Term;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class TermController extends Controller
{
    public function create(Request $request, $studySetId)
    {
        $validator = Validator::make($request->all(), [
            'term' => 'required|string',
            'definition' => 'required|string',
            'is_starred' => 'integer'
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
        $term->is_starred = $request->is_starred;
        $term->study_set_id = $studySetId;
        $term->save();

        return response()->json([
            'code' => Response::HTTP_CREATED,
            'message' => 'Successfully created term.',
            'details' => $term
        ]);
    }
}
