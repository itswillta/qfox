<?php

namespace App\Http\Controllers;

use App\Enums\SupportedLanguages;
use App\Helpers\ResponseFormatter;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Response;
use Intervention\Image\Facades\Image;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function update(Request $request, $user_id)
    {
        $user = User::findOrFail($user_id);

        // FIXME: Need to confirm with frontend
        $validator = Validator::make($request->all(), [
            'profile_picture_data' => 'image|mimes:jpeg,png,jpg,gif,svg',
            'name' => 'between:4,30',
            'language' => Rule::in(SupportedLanguages::$type)
        ]);

        if ($validator->fails()) {
            $details = ResponseFormatter::flattenValidatorErrors($validator);

            return response()->json([
                'error' => [
                    'code' => Response::HTTP_BAD_REQUEST,
                    'message' => 'Failed to update user profile. Please check your user information.',
                    'details' => (object)$details
                ]
            ], Response::HTTP_BAD_REQUEST);
        }

        $is_anything_updated = false;

        if ($request->profile_picture_data) {
            $is_anything_updated = true;
            $profile_picture_data = $request->profile_picture_data;
            $filename = time() . '.' . explode('/', explode(':', substr($profile_picture_data, 0, strpos($profile_picture_data, ';')))[1])[1];
            $save_path = public_path() . '/images/';

            File::makeDirectory($save_path, $mode = 0075, true, true);

            Image::make($profile_picture_data)->resize(300, 300)->save($save_path . $filename);

            // TODO: Make an ENV variable for development mode and deployment mode
            $user->profile_picture_url = 'http://localhost/images/' . $filename;
        }

        if ($request->name) {
            $is_anything_updated = true;
            $user->name = $request->name;
        }

        if ($request->language) {
            $is_anything_updated = true;
            $user->language = $request->language;
        }

        if ($is_anything_updated) {
            $user->save();
        }

        return response()->json([
            "message" => $is_anything_updated ? 'Successfully updated user profile.' : 'There is nothing to update.',
            "details" => $user
        ], Response::HTTP_OK);
    }
}
