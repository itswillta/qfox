<?php


namespace App\Http;


class ApiErrorResponse
{
    /**
     * @param $code int the response status code
     * @param $message string the response error message
     * @param null $details object/array the details of the error
     * @return array the error response body
     */
    public static function generate($code, $message, $details = null)
    {
        $error_response = [
            'error' => [
                'code' => $code,
                'message' => $message
            ]
        ];

        if ($details) {
            $error_response['error']['details'] = $details;
        }

        return $error_response;
    }
}