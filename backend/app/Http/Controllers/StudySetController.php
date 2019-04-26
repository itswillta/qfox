<?php

namespace App\Http\Controllers;

use App\Enums\StudySetRole;
use App\Services\StudySet\StudySetParticipantService;
use App\StudySet;
use App\Enums\StudySetPermission;
use App\Term;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\Rule;
use App\Services\RequestValidator;
use App\Services\ResourceUpdater;
use Illuminate\Support\Facades\Cache;
use App\Services\Term\TermManagementService;
use DB;

class StudySetController extends Controller
{
    public function create(Request $request, $user_id)
    {
        RequestValidator::validateOrFail($request->all(), [
            'title' => 'required|string',
            'viewPermission' => [
                'required',
                Rule::in(StudySetPermission::$view_permission_types)
            ],
            'editPermission' => [
                'required',
                Rule::in(StudySetPermission::$edit_permission_types)
            ],
            'termList' => 'array|min:0',
        ]);

        $study_set = new StudySet();
        $study_set->title = $request->title;
        $study_set->view_permission = $request->viewPermission;
        $study_set->edit_permission = $request->editPermission;

        $termList = $request->termList;

        DB::transaction(function () use ($termList, $study_set, $user_id) {
            $study_set->save();
            $study_set->users()->attach($user_id, ['role' => StudySetRole::OWNER]);
            if ($termList) {
                $study_set_id = $study_set->id;
                foreach ($termList as $term_info) {
                    TermManagementService::create($term_info, $study_set_id);
                }
            }
        });

        Cache::forget(StudySetParticipantService::getOwnerIdCacheKey($study_set->id));

        return response()->noContent(Response::HTTP_CREATED);
    }

    public function update(Request $request, $user_id, $study_set_id)
    {

        RequestValidator::validateOrFail($request->all(), [
            'title' => 'string',
            'viewPermission' => [
                Rule::in(StudySetPermission::$view_permission_types)
            ],
            'editPermission' => [
                Rule::in(StudySetPermission::$edit_permission_types)
            ],
            'termList' => 'array|min:0',
        ]);

        $study_set = StudySet::findOrFail($study_set_id);
        $termList = $request->termList;
        $is_anything_updated = ResourceUpdater::update([
            'title' => $request->title,
            'view_permission' => $request->viewPermission,
            'edit_permission' => $request->editPermission
        ], $study_set);

        foreach ($termList as $term) {
            if (array_key_exists('id', $term)) {
                $term_in_database = Term::findOrFail($term['id']);
                if (array_key_exists('willBeDeleted', $term) && $term['willBeDeleted']) {
                    $term_in_database->delete();
                } else {
                    $is_anything_updated = ResourceUpdater::update($term, $term_in_database) || $is_anything_updated;
                }
            } else {
                TermManagementService::create($term, $study_set_id);
            }
        }

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