<?php

namespace App\Http\Controllers;

use App\Constants\FetchOptions;
use App\Enums\SupportedLanguages;
use App\Http\ApiErrorResponse;
use App\Services\ResourceUpdater;
use App\Services\User\UserManagementService;
use App\Services\User\UserSearchService;
use App\Services\User\UserStudySetsService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\Facades\Image;
use Illuminate\Validation\Rule;
use App\Services\RequestValidator;

class UserController extends Controller
{
    public function update(Request $request, $user_id)
    {
        RequestValidator::validateOrFail($request->all(), [
            'name' => 'between:4,30',
            'language' => Rule::in(SupportedLanguages::$types),
            'current_password' => 'string',
            'new_password' => 'string|min:6'
        ]);

        $user = UserManagementService::getUser($user_id);

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
            $user->save();
        }

        if ($request->current_password && $request->new_password) {
            if (!Hash::check($request->current_password, $user->password)) {
                return response()->json(ApiErrorResponse::generate(
                    Response::HTTP_BAD_REQUEST,
                    'Your current password does not matches with the password you provided.',
                    ['current_password' => 'Password incorrect.']
                ), Response::HTTP_BAD_REQUEST);
            }

            if (strcmp($request->current_password, $request->new_password) == 0) {
                return response()->json(ApiErrorResponse::generate(
                    Response::HTTP_BAD_REQUEST,
                    'New Password cannot be same as your current password.',
                    ['new_password' => 'Password incorrect.']
                ), Response::HTTP_BAD_REQUEST);
            }

            $user->password = bcrypt($request->new_password);
            $user->save();
        }

        $is_anything_updated = ResourceUpdater::update($request->only('name', 'language'), $user) || $is_anything_updated;

        if ($is_anything_updated) {
            $user->reindex();
        }

        return response()->noContent($is_anything_updated ? Response::HTTP_OK : Response::HTTP_NO_CONTENT);
    }

    public function getStudySets(Request $request, $user_id)
    {
        $order_by = $request->query('order_by') ?: FetchOptions::DEFAULT_ORDER_BY;
        $order_direction = $request->query('order_direction') ?: FetchOptions::DEFAULT_ORDER_DIRECTION;

        $study_sets = UserStudySetsService::getAllStudySets($user_id, [
            'order_by' => $order_by,
            'order_direction' => $order_direction
        ]);

        return response()->json([
            'studySets' => $study_sets
        ]);
    }

    public function getStudyClasses($user_id)
    {
        $user = UserManagementService::getUser($user_id);

        return response()->json([
            'studyClasses' => $user->classes
        ]);
    }

    public function search(Request $request)
    {
        $users = UserSearchService::searchUserByQuery($request->query('query'));

        return response()->json([
            'users' => $users
        ]);
    }
}
