<?php

namespace App\Http\Middleware;

use App\Exceptions\WrongUserPermissionException;
use Illuminate\Http\Request;
use Closure;

class UserPermission
{
    /**
     * Handle an incoming request.
     *
     * @param  Request $request
     * @param  Closure $next
     * @return mixed
     * @throws WrongUserPermissionException
     */
    public function handle(Request $request, Closure $next)
    {
        $param_user_id = (int)$request->route()->parameter('user_id');
        $auth_user_id = auth()->id();

        if ($param_user_id !== $auth_user_id) {
            throw new WrongUserPermissionException();
        }

        return $next($request);
    }
}
