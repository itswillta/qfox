<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseFormatter;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Response;
use Intervention\Image\Facades\Image;

class UserController extends Controller
{
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        //FIXME Need to confirm with frontend
        $validator = Validator::make($request->all(), [
            'profile_picture_data' => 'image|mimes:jpeg,png,jpg,gif,svg',
            'name' => 'max:30|min:4'
        ]);

        if ($validator->fails()) {
            $details = ResponseFormatter::flattenValidatorErrors($validator);

            return response()->json([
                'error' => [
                    'code' => Response::HTTP_BAD_REQUEST,
                    'message' => 'Failed to update profile user. Please check your user information.',
                    'details' => (object)$details
                ]
            ], Response::HTTP_BAD_REQUEST);
        }

        if ($request->get('profile_picture_data')) {
            $profile_picture_data = $request->get('profile_picture_data');
            $filename = time() . '.' . explode('/', explode(':', substr($profile_picture_data, 0, strpos($profile_picture_data, ';')))[1])[1];
            $save_path = public_path() . '/images/';

            File::makeDirectory($save_path, $mode = 0075, true, true);

            Image::make($profile_picture_data)->resize(300, 300)->save($save_path . $filename);

            // TODO: Make an ENV variable for development mode and deployment mode
            $user->profile_picture_url = 'http://localhost/images/' . $filename;
        }

        $user->name = $request->name;
        $user->language = $request->language;

        $user->save();

        return response()->json([
            "code" => Response::HTTP_OK,
            "message" => 'Successfully updated profile user.',
            "details" => $user
        ], Response::HTTP_OK);
    }
}
