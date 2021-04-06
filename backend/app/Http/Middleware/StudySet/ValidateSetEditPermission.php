<?php

namespace App\Http\Middleware\StudySet;

use App\Enums\StudySetPermission;
use App\Exceptions\RestResourceNotFoundException;
use App\Exceptions\WrongUserPermissionException;
use App\Services\StudySet\StudySetParticipantService;
use App\StudySet;
use Illuminate\Http\Request;
use Closure;

class ValidateSetEditPermission
{
    /**
     * @param Request $request
     * @param Closure $next
     * @return mixed
     * @throws RestResourceNotFoundException
     * @throws WrongUserPermissionException
     */
    public function handle(Request $request, Closure $next) {
        $auth_user_id = auth()->id();
        $user_id = (int)$request->route()->parameter('user_id');
        $study_set_id = (int)$request->route()->parameter('study_set_id');

        $owner_id = (int)StudySetParticipantService::getOwnerId($study_set_id);

        if ($user_id !== $owner_id) {
            throw new RestResourceNotFoundException('Requested pair of user and study set does not exist.');
        }

        $study_set = StudySet::findOrFail($study_set_id);

        if ($study_set->edit_permission === StudySetPermission::JUST_ME && $auth_user_id !== $user_id) {
            throw new WrongUserPermissionException();
        }

        return $next($request);
    }
}
