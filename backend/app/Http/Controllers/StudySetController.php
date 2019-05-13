<?php

namespace App\Http\Controllers;

use App\Enums\StudySetRole;
use App\Services\StudySet\StudySetManagementService;
use App\Services\StudySet\StudySetParticipantService;
use App\Services\User\UserManagementService;
use App\StudySet;
use App\Enums\StudySetPermission;
use App\Term;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\Rule;
use App\Services\RequestValidator;
use App\Services\ResourceUpdater;
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
            'terms' => 'array|min:0',
        ]);

        $study_set = new StudySet();
        $study_set->title = $request->title;
        $study_set->view_permission = $request->viewPermission;
        $study_set->edit_permission = $request->editPermission;

        $terms = $request->terms;

        DB::transaction(function () use ($terms, $study_set, $user_id) {
            $study_set->save();
            $study_set->addToIndex();
            $study_set->users()->attach($user_id, ['role' => StudySetRole::OWNER]);
            if ($terms) {
                $study_set_id = $study_set->id;
                foreach ($terms as $term) {
                    TermManagementService::create($term, $study_set_id);
                }
            }
        });

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
            'terms' => 'array|min:0',
        ]);

        $study_set = StudySet::findOrFail($study_set_id);
        $terms = $request->terms;
        $is_anything_updated = ResourceUpdater::update([
            'title' => $request->title,
            'view_permission' => $request->viewPermission,
            'edit_permission' => $request->editPermission
        ], $study_set);

        foreach ($terms as $term) {
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

        if ($is_anything_updated) {
            $study_set->reindex();
        }

        return response()->noContent($is_anything_updated ? Response::HTTP_OK : Response::HTTP_NO_CONTENT);
    }

    public function delete($user_id, $study_set_id)
    {
        $study_set = StudySet::findOrFail($study_set_id);
        $study_set->delete();
        $study_set->removeFromIndex();

        return response()->noContent(Response::HTTP_OK);
    }

    public function getOne($user_id, $study_set_id)
    {
        $study_set = StudySetManagementService::getFullStudySet($study_set_id);

        return response()->json($study_set);
    }

    public function getAllTerms($user_id, $study_set_id)
    {
        $study_set = StudySet::findOrFail($study_set_id);

        $terms = $study_set->terms;

        return response()->json([
            'terms' => $terms
        ]);
    }

    public function search(Request $request)
    {
        $study_sets = StudySet::searchByQuery([
            'match' => [
                'title' => [
                    'query' => $request->query('query'),
                    'fuzziness' => 'AUTO',
                ]
            ]
        ]);

        foreach ($study_sets as $study_set) {
            $study_set->owner = UserManagementService::getPublicUserInfo(StudySetParticipantService::getOwnerId($study_set->id));
            $study_set->totalTerms = count(TermManagementService::getStudySetTerms($study_set->id));
        }

        return response()->json([
            'study_sets' => $study_sets
        ]);
    }
}
