<?php


namespace App\Http\Middleware;

use App\Http\ApiErrorResponse;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Exception;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;
use Tymon\JWTAuth\JWTAuth;

class JwtMiddleware extends BaseMiddleware
{

    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (!auth()->check()) {
            return response()->json(
                ApiErrorResponse::generate(
                    Response::HTTP_UNAUTHORIZED,
                    'You are not authorized to perform the request.'
                ), Response::HTTP_UNAUTHORIZED
            );
        }

        return $next($request);
    }
}