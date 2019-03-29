<?php

namespace App\Http\Controllers;

use App\Enums\StudySetRole;
use App\StudySet;
use App\Enums\StudySetPermission;
use Illuminate\Http\Request;
use App\Helpers\ResponseFormatter;
use App\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class StudySetController extends Controller
{
    public function create(Request $request, $userId)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'viewPermission' => [
                'required',
                Rule::in(StudySetPermission::$viewPermission)
            ],
            'editPermission' => [
                'required',
                Rule::in(StudySetPermission::$editPermission)
            ]
        ]);

        if ($validator->fails()) {
            $details = ResponseFormatter::flattenValidatorErrors($validator);

            return response()->json([
                'error' => [
                    'code' => Response::HTTP_BAD_REQUEST,
                    'message' => 'Failed to create study set. Please check your study set information.',
                    'details' => (object)$details
                ]
            ], Response::HTTP_BAD_REQUEST);
        }

        $studySet = new StudySet();

        $studySet->title = $request->title;
        $studySet->viewPermission = $request->viewPermission;
        $studySet->editPermission = $request->editPermission;
        $studySet->save();

        $studySet->users()->attach($userId, ['role' => StudySetRole::OWNER]);

        return response()->json([
            'code' => Response::HTTP_CREATED,
            'message' => 'Successfully created study set.',
            'details' => $studySet
        ]);
    }
}
