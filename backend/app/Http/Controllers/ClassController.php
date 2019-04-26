<?php

namespace App\Http\Controllers;

use App\Enums\ClassPermission;
use App\Enums\ClassRole;
use App\Http\ApiErrorResponse;
use App\Services\RequestValidator;
use App\Services\ResourceUpdater;
use App\Services\StudyClass\ClassParticipantService;
use App\StudyClass;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class ClassController extends Controller
{
    public function create(Request $request, $user_id)
    {
        RequestValidator::validateOrFail($request->all(), [
            'name' => 'required|string',
            'description' => 'string',
            'permission' => [
                'required',
                Rule::in(ClassPermission::$types)
            ]
        ]);

        $class = new StudyClass();
        $class->name = $request->name;
        $class->description = $request->description;
        $class->permission = $request->permission;

        DB::transaction(function () use ($class, $user_id) {
            $class->save();
            $class->users()->attach($user_id, ['role' => ClassRole::OWNER]);
        });

        return response()->noContent(Response::HTTP_CREATED);
    }

    public function update(Request $request, $user_id, $class_id)
    {
        RequestValidator::validateOrFail($request->all(), [
            'name' => 'string',
            'description' => 'string',
            'permission' => Rule::in(ClassPermission::$types)
        ]);

        $class = StudyClass::findOrFail($class_id);

        $is_anything_updated = ResourceUpdater::update($request->all(), $class);

        return response()->noContent($is_anything_updated ? Response::HTTP_OK : Response::HTTP_NOT_MODIFIED);
    }

    public function addStudySet(Request $request, $user_id, $class_id)
    {
        RequestValidator::validateOrFail($request->all(), [
            'studySetId' => 'required|integer',
        ]);

        $class = StudyClass::findOrFail($class_id);

        $class->studySets()->attach($request->studySetId);

        return response()->noContent(Response::HTTP_CREATED);
    }

    public function delete($user_id, $class_id)
    {
        $class = StudyClass::findOrFail($class_id);

        $class->delete();

        return response()->noContent(Response::HTTP_OK);
    }

    public function addMember(Request $request, $user_id, $class_id)
    {
        RequestValidator::validateOrFail($request->all(), [
            'userId' => 'required|integer',
            'role' => Rule::in(ClassRole::$types)
        ]);

        $class = StudyClass::findOrFail($class_id);

        $class->users()->attach($request->userId, ['role' => $request->role ?: ClassRole::MEMBER]);

        return response()->noContent(Response::HTTP_CREATED);
    }

    public function removeMembers(Request $request, $user_id, $class_id)
    {
        RequestValidator::validateOrFail($request->all(), [
            'userIds' => 'required|array',
            'userIds.*' => 'integer'
        ]);

        $class_owner_id = ClassParticipantService::getOwnerId($class_id);

        foreach ($request->userIds as $user_id_to_delete) {
            if ($class_owner_id === $user_id_to_delete) {
                return response()->json(ApiErrorResponse::generate(
                    Response::HTTP_BAD_REQUEST,
                    'Failed to remove members from class. Please check your member information.',
                    [
                        'userId' => 'User with id ' . $user_id_to_delete . ' is the owner.'
                    ]
                ), Response::HTTP_BAD_REQUEST);
            }
        }

        $class = StudyClass::findOrFail($class_id);
        $class->users()->detach($request->userIds);

        return response()->noContent(Response::HTTP_OK);
    }

    public function removeStudySets(Request $request, $user_id, $class_id)
    {
        RequestValidator::validateOrFail($request->all(), [
            'studySetIds' => 'required|array',
            'studySetIds.*' => 'integer'
        ]);

        $class = StudyClass::findOrFail($class_id);
        $class->studySets()->detach($request->studySetIds);

        return response()->noContent(Response::HTTP_OK);
    }
}
