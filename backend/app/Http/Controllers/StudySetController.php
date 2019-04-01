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
use DB;

class StudySetController extends Controller
{
    public function create(Request $request, $user_id)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'viewPermission' => [
                'required',
                Rule::in(StudySetPermission::$view_permission)
            ],
            'editPermission' => [
                'required',
                Rule::in(StudySetPermission::$edit_permission)
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

        $study_set = new StudySet();
        $study_set->title = $request->title;
        $study_set->view_permission = $request->viewPermission;
        $study_set->edit_permission = $request->editPermission;

        DB::transaction(function () use ($study_set, $user_id) {
            $study_set->save();
            $study_set->users()->attach($user_id, ['role' => StudySetRole::OWNER]);
        });

        return response()->json([
            'message' => 'Successfully created study set.',
            'details' => $study_set
        ], Response::HTTP_CREATED);
    }

    public function update(Request $request, $study_set_id)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'string',
            'viewPermission' => [
                Rule::in(StudySetPermission::$view_permission)
            ],
            'editPermission' => [
                Rule::in(StudySetPermission::$edit_permission)
            ]
        ]);

        if ($validator->fails()) {
            $details = ResponseFormatter::flattenValidatorErrors($validator);

            return response()->json([
                'error' => [
                    'code' => Response::HTTP_BAD_REQUEST,
                    'message' => 'Failed to update study set. Please check your study set information.',
                    'details' => (object)$details
                ]
            ], Response::HTTP_BAD_REQUEST);
        }

        $study_set = StudySet::findOrFail($study_set_id);
        $is_anything_updated = false;

        if ($request->title && $study_set->title !== $request->title) {
            $is_anything_updated = true;
            $study_set->title = $request->title;
        }

        if ($request->viewPermission && $study_set->view_permission !== $request->viewPermission) {
            $is_anything_updated = true;
            $study_set->view_permission = $request->viewPermission;
        }

        if ($request->editPermission && $study_set->edit_permission !== $request->editPermission) {
            $is_anything_updated = true;
            $study_set->edit_permission = $request->editPermission;
        }

        if ($is_anything_updated) {
            $study_set->save();
        }

        return response()->json([
            'message' => $is_anything_updated ? 'Successfully update study set.' : 'There is nothing to update.',
            "details" => $study_set
        ]);
    }

    public function delete($user_id, $study_set_id)
    {
        $study_set = StudySet::findOrFail($study_set_id);
        $study_set->delete();
        
        return response()->noContent(Response::HTTP_OK);
    }
}
