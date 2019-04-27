<?php

namespace App\Http\Middleware\Term;

use App\Exceptions\RestResourceNotFoundException;
use App\Services\Term\TermPermissionService;
use Illuminate\Http\Request;
use Closure;

class ValidateTermEditPermission
{
    /**
     * @param Request $request
     * @param Closure $next
     * @return mixed
     * @throws RestResourceNotFoundException
     */
    public function handle(Request $request, Closure $next) {
        $study_set_id = (int)$request->route()->parameter('study_set_id');
        $term_id = (int)$request->route()->parameter('term_id');

        if ((int)TermPermissionService::getParentStudySetId($term_id) !== $study_set_id) {
            throw new RestResourceNotFoundException('Requested pair of study set and term does not exist.');
        }

        return $next($request);
    }
}
