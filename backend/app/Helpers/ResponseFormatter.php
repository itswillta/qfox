<?php

namespace App\Helpers;

use Illuminate\Contracts\Validation\Validator;

class ResponseFormatter
{
    public static function flattenValidatorErrors(Validator $validator)
    {
        $details = [];
        foreach ($validator->errors()->toArray() as $field => $value) {
            $details[$field] = $value[0];
        }

        return $details;
    }
}