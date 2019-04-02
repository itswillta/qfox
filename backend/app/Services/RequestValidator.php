<?php

namespace App\Services;

use Illuminate\Support\Facades\Validator;
use App\Exceptions\ValidationException;

class RequestValidator
{
    public static function validateOrFail($data, $rules = [], $custom_errors = [])
    {
        $validation = Validator::make($data, $rules, $custom_errors);

        if ($validation->fails()) {
            throw new ValidationException($validation->errors(), 'Request validation failed. Please check your information.');
        }

        return true;
    }

}