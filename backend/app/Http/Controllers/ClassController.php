<?php

namespace App\Http\Controllers;

use App\Enums\ClassPermission;
use App\Enums\ClassRole;
use App\Helpers\ResponseFormatter;
use App\StudyClass;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use DB;

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

        DB::transaction(function() use ($class, $user_id) {
            $class->save();
            $class->users()->attach($user_id, ['role' => ClassRole::OWNER]);
        });

        return response()->json([
            'message' => 'Successfully created class.',
            'details' => $class
        ], Response::HTTP_CREATED);
    }
}
