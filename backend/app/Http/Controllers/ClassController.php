<?php

namespace App\Http\Controllers;

use App\StudyClass;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class ClassController extends Controller
{
    public function create(Request $request, $userId)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'description' => 'required|string',
            'permission' => 'required'
        ]);

        if ($validator->fails()) {
            $details = [];
            foreach ($validator->errors()->toArray() as $field => $value) {
                $details[$field] = $value[0];
            }

            return response()->json([
                'error' => [
                    'code' => Response::HTTP_BAD_REQUEST,
                    'message' => 'Create class failed. Please check your class information.',
                    'details' => (object)$details
                ]
            ], Response::HTTP_BAD_REQUEST);
        }

        if (User::find($userId) == null) {
            return response()->json([
                'error' => [
                    'code' => Response::HTTP_BAD_REQUEST,
                    'message' => 'Create class failed.',
                    'details' => 'User does not exist.'
                ]
            ]);
        }

        $class = new StudyClass();

        $class->name = $request->name;
        $class->description = $request->description;
        $class->permission = $request->permission;
        $class->save();

        $class->users()->attach($request->user_id, ['role' => 'Owner']);

        return response()->json([
            'code' => Response::HTTP_CREATED,
            'message' => 'Create class successful.',
            'details' => $class
        ]);
    }
}
