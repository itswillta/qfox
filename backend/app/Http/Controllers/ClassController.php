<?php

namespace App\Http\Controllers;

use App\Enums\ClassPermission;
use App\Enums\ClassRole;
use App\Helpers\ResponseFormatter;
use App\StudyClass;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class ClassController extends Controller
{
    public function create(Request $request, $user_id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'description' => 'string',
            'permission' => [
                'required',
                Rule::in(ClassPermission::$type)
            ]
        ]);

        if ($validator->fails()) {
            $details = ResponseFormatter::flattenValidatorErrors($validator);

            return response()->json([
                'error' => [
                    'code' => Response::HTTP_BAD_REQUEST,
                    'message' => 'Failed to create class. Please check your class information.',
                    'details' => (object)$details
                ]
            ], Response::HTTP_BAD_REQUEST);
        }

        $class = new StudyClass();
        $class->name = $request->name;
        $class->description = $request->description;
        $class->permission = $request->permission;

        DB::transaction(function () use ($class, $user_id) {
            $class->save();
            $class->users()->attach($user_id, ['role' => ClassRole::OWNER]);
        });

        return response()->json([
            'message' => 'Successfully created class.',
            'details' => $class
        ], Response::HTTP_CREATED);
    }

    public function update(Request $request, $user_id, $class_id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'string',
            'description' => 'string',
            'permission' => Rule::in(ClassPermission::$type)
        ]);

        if ($validator->fails()) {
            $details = ResponseFormatter::flattenValidatorErrors($validator);

            return response()->json([
                'error' => [
                    'code' => Response::HTTP_BAD_REQUEST,
                    'message' => 'Failed to edit class. Please check your class information.',
                    'details' => (object)$details
                ]
            ], Response::HTTP_BAD_REQUEST);
        }

        $class = StudyClass::findOrFail($class_id);

        $is_anything_updated = false;

        if ($request->name) {
            $is_anything_updated = true;
            $class->name = $request->name;
        }

        if ($request->description) {
            $is_anything_updated = true;
            $class->description = $request->description;
        }

        if ($request->permission) {
            $is_anything_updated = true;
            $class->permission = $request->permission;
        }

        if ($is_anything_updated) {
            $class->save();
        }

        return response()->json([
            'message' => $is_anything_updated ? 'Successfully edited class.' : 'There is nothing to update.',
            "details" => $class
        ]);
    }

    public function addStudySet(Request $request, $user_id, $class_id)
    {
        $validator = Validator::make($request->all(), [
            'studySetId' => 'required|integer',
        ]);

        if ($validator->fails()) {
            $details = ResponseFormatter::flattenValidatorErrors($validator);

            return response()->json([
                'error' => [
                    'code' => Response::HTTP_BAD_REQUEST,
                    'message' => 'Failed to add study set to class. Please check your study set information.',
                    'details' => (object)$details
                ]
            ], Response::HTTP_BAD_REQUEST);
        }

        $class = StudyClass::findOrFail($class_id);
        $class->studySets()->attach($request->studySetId);

        return response()->noContent(Response::HTTP_OK);
    }

    public function delete($user_id, $class_id)
    {
        $class = StudyClass::findOrFail($class_id);
        $class->delete();

        return response()->noContent(Response::HTTP_OK);
    }

    public function addMember(Request $request, $user_id, $class_id)
    {
        $validator = Validator::make($request->all(), [
            'userId' => 'required|integer',
        ]);

        if ($validator->fails()) {
            $details = ResponseFormatter::flattenValidatorErrors($validator);

            return response()->json([
                'error' => [
                    'code' => Response::HTTP_BAD_REQUEST,
                    'message' => 'Failed to add study set to class. Please check your study set information.',
                    'details' => (object)$details
                ]
            ], Response::HTTP_BAD_REQUEST);
        }

        $class = StudyClass::findOrFail($class_id);
        $class->users()->attach($request->userId, ['role' => ClassRole::MEMBER]);

        return response()->noContent(Response::HTTP_OK);
    }

    public function removeMembers(Request $request, $user_id, $class_id)
    {
        $validator = Validator::make($request->all(), [
            'userIds' => 'required|array',
            'userIds.*' => 'integer'
        ]);

        if ($validator->fails()) {
            $details = ResponseFormatter::flattenValidatorErrors($validator);

            return response()->json([
                'error' => [
                    'code' => Response::HTTP_BAD_REQUEST,
                    'message' => 'Failed to remove members from class. Please check your member information.',
                    'details' => (object)$details
                ]
            ], Response::HTTP_BAD_REQUEST);
        }

        // FIXME use first() instead of get()
        $user_class = DB::table('user_classes')->where([
            ['class_id', '=', $class_id],
            ['role', '=', ClassRole::OWNER]
        ])->get();
        $owner_id = $user_class[0]->user_id;

        foreach ($request->userIds as $userId) {
            if ($owner_id === $userId) {
                return response()->json([
                    'error' => [
                        'code' => Response::HTTP_BAD_REQUEST,
                        'message' => 'Failed to remove members from class. Please check your member information.',
                        'details' => [
                            'userId' => 'User with id ' . $userId . ' is the owner.'
                        ]
                    ]
                ], Response::HTTP_BAD_REQUEST);
            }
        }

        $class = StudyClass::findOrFail($class_id);
        $class->users()->detach($request->userIds);

        return response()->noContent(Response::HTTP_OK);
    }

    public function removeStudySets(Request $request, $user_id, $class_id)
    {
        $validator = Validator::make($request->all(), [
            'studySetIds' => 'required|array',
            'studySetIds.*' => 'integer'
        ]);

        if ($validator->fails()) {
            $details = ResponseFormatter::flattenValidatorErrors($validator);

            return response()->json([
                'error' => [
                    'code' => Response::HTTP_BAD_REQUEST,
                    'message' => 'Failed to remove study sets from class. Please check your study set information.',
                    'details' => (object)$details
                ]
            ], Response::HTTP_BAD_REQUEST);
        }

        $class = StudyClass::findOrFail($class_id);
        $class->studySets()->detach($request->studySetIds);

        return response()->noContent(Response::HTTP_OK);
    }
}
