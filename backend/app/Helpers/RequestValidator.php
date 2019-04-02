<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Validator;
use App\Exceptions\ValidationException;

class RequestValidator
{
    public static function validate($data, $rules = [], $custom_errors = [])
    {
         // Use Laravel's Validator and validate the data
        $validation = Validator::make($data, $rules, $custom_errors);

        if ($validation->fails()) {
            // Validation failed, throw an exception
            throw new ValidationException($validation->errors(), 'Request validation failed. Please check your information.');
        }

        // All good and shiny
        return true;
    }

}