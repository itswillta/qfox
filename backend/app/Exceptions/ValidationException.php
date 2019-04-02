<?php

namespace App\Exceptions;

use App\Http\ApiErrorResponse;
use Exception;
use App\Helpers\ResponseFormatter;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Response;

class ValidationException extends Exception
{
    protected $errors;

    /**
     * ValidationException constructor.
     * @param $errors
     * @param string $message
     */
    public function __construct($errors, $message = '')
    {
        parent::__construct($message);
        $this->errors = $errors;
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
        return response()->json(
            ApiErrorResponse::generate(
                Response::HTTP_BAD_REQUEST,
                $this->getMessage(),
                ResponseFormatter::flattenValidationErrors(($this->errors))
            ), Response::HTTP_BAD_REQUEST
        );
    }
}