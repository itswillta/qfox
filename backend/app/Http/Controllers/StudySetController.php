<?php

namespace App\Http\Controllers;

use App\Enums\StudySetRole;
use App\Services\StudyClass\ClassParticipantService;
use App\Services\StudySet\StudySetParticipantService;
use App\StudySet;
use App\Enums\StudySetPermission;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cache;
use Illuminate\Validation\Rule;
use App\Services\RequestValidator;
use App\Services\ResourceUpdater;
use DB;

class StudySetController extends Controller
{
    public function create(Request $request, $user_id)
    {
        RequestValidator::validateOrFail($request->all(), [
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

        $study_set = new StudySet();
        $study_set->title = $request->title;
        $study_set->view_permission = $request->viewPermission;
        $study_set->edit_permission = $request->editPermission;

        DB::transaction(function () use ($study_set, $user_id) {
            $study_set->save();
            $study_set->users()->attach($user_id, ['role' => StudySetRole::OWNER]);
        });

        Cache::forget(StudySetParticipantService::getOwnerIdCacheKey($study_set->id));

        return response()->noContent(Response::HTTP_CREATED);
    }

    public function update(Request $request, $study_set_id)
    {
        RequestValidator::validateOrFail($request->all(), [
            'title' => 'string',
            'viewPermission' => [
                Rule::in(StudySetPermission::$view_permission)
            ],
            'editPermission' => [
                Rule::in(StudySetPermission::$edit_permission)
            ]
        ]);

        $study_set = StudySet::findOrFail($study_set_id);

        $is_anything_updated = ResourceUpdater::update($request->all(), $study_set);

        return response()->noContent($is_anything_updated ? Response::HTTP_OK : Response::HTTP_NOT_MODIFIED);
    }

    public function delete($user_id, $study_set_id)
    {
        $study_set = StudySet::findOrFail($study_set_id);
        $study_set->delete();
        
        return response()->noContent(Response::HTTP_OK);
    }

    public function getAllTerms($user_id, $study_set_id)
    {
        $study_set = StudySet::findOrFail($study_set_id);

        $terms = $study_set->terms;

        return response()->json([
            'terms' => $terms
        ]);
    }
}
