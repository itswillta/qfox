<?php

namespace App\Exceptions;

use App\Http\ApiErrorResponse;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Response;

class RestResourceNotFoundException extends Exception
{
    /**
     * RestResourceNotFoundException constructor.
     * @param string $message
     */
    public function __construct($message = 'Requested resource not found.')
    {
        parent::__construct($message);
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
            Response::HTTP_NOT_FOUND,
            $this->getMessage()
        ), Response::HTTP_NOT_FOUND);
    }
}