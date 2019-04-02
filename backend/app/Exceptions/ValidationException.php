<?php

namespace App\Exceptions;

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
        ResponseFormatter::flattenValidationErrors($this->errors);

        return response()->json([
            'error' => [
                'code' => Response::HTTP_BAD_REQUEST,
                'message' => $this->getMessage(),
                'details' => (object)ResponseFormatter::flattenValidationErrors($this->errors)
            ]
        ], Response::HTTP_BAD_REQUEST);
    }
}