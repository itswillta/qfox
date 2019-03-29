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

class ClassController extends Controller
{
    public function create(Request $request, $userId)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'description' => 'required|string',
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
        $class->permission = ClassPermission::getKey($request->permission);
        $class->save();

        $class->users()->attach($userId, ['role' => ClassRole::OWNER]);

        return response()->json([
            'code' => Response::HTTP_CREATED,
            'message' => 'Successfully created class.',
            'details' => $class
        ]);
    }
}
