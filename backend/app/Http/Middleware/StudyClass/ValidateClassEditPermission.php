<?php

namespace App\Http\Middleware\StudyClass;

use App\Exceptions\RestResourceNotFoundException;
use App\Exceptions\WrongUserPermissionException;
use App\Services\StudyClass\ClassParticipantService;
use Illuminate\Http\Request;
use Closure;

class ValidateClassEditPermission
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
        $class_id = (int)$request->route()->parameter('class_id');

        $owner_id = ClassParticipantService::getOwnerId($class_id);

        if ($user_id !== $owner_id) {
            throw new RestResourceNotFoundException('Requested pair of user and study set does not exist.');
        }

        $admin_ids = ClassParticipantService::getAdminIds($class_id);

        if (!in_array($auth_user_id, $admin_ids)) {
            throw new WrongUserPermissionException();
        }

        return $next($request);
    }
}
