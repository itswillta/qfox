<?php

namespace App\Helpers;

class ResponseFormatter
{
    public static function flattenValidationErrors($errors)
    {
        $details = [];
        foreach ($errors->toArray() as $field => $value) {
            $details[$field] = $value[0];
        }

        return $details;
    }
}