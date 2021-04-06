<?php

namespace App\Exceptions;

use App\Http\ApiErrorResponse;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Response;

class WrongUserPermissionException extends Exception
{
    /**
     * WrongUserPermissionException constructor.
     * @param string $message
     */
    public function __construct($message = 'You do not have the permission to perform this action.')
    {
        $this->message = $message;
        parent::__construct($this->message);
    }

    /**
     * Report or log an exception.
     *
     * @return void
     */
    public function report()
    {
        Log::channel('stderr')->error($this->getMessage());
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function render()
    {
        return response()->json(ApiErrorResponse::generate(
            Response::HTTP_FORBIDDEN,
            $this->getMessage()
        ), Response::HTTP_FORBIDDEN);
    }
}