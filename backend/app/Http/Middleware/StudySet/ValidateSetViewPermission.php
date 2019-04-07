<?php

namespace App\Http\Middleware\StudySet;

use App\Enums\StudySetPermission;
use App\Exceptions\RestResourceNotFoundException;
use App\Exceptions\WrongUserPermissionException;
use App\Services\StudySet\StudySetParticipantService;
use App\StudySet;
use Illuminate\Http\Request;
use Closure;

class ValidateSetViewPermission
{
    /**
     * @param Request $request
     * @param Closure $next
     * @return mixed
     * @throws RestResourceNotFoundException
     * @throws WrongUserPermissionException
     */
    public function handle(Request $request, Closure $next)
    {
        $user_id = (int)$request->route()->parameter('user_id');
        $study_set_id = (int)$request->route()->parameter('study_set_id');

        $owner_id = StudySetParticipantService::getOwnerId($study_set_id);

        if ($user_id !== $owner_id) {
            throw new RestResourceNotFoundException('Requested pair of user and study set does not exist.');
        }

        $study_set = StudySet::findOrFail($study_set_id);

        $auth_user_id = auth()->id();

        if (($study_set->view_permission === StudySetPermission::LOGGED_IN_USERS && !$auth_user_id) ||
            ($study_set->view_permission === StudySetPermission::JUST_ME && $auth_user_id !== $user_id)) {
            throw new WrongUserPermissionException();
        }

        return $next($request);
    }
}
