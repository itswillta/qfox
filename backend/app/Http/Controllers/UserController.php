<?php

namespace App\Http\Controllers;

use App\Enums\SupportedLanguages;
use App\Services\ResourceUpdater;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Response;
use Intervention\Image\Facades\Image;
use Illuminate\Validation\Rule;
use App\Services\RequestValidator;
use DB;

class UserController extends Controller
{
    public function update(Request $request, $user_id)
    {
        // FIXME: Need to confirm with frontend
        RequestValidator::validateOrFail($request->all(), [
            'profile_picture_data' => 'image|mimes:jpeg,png,jpg,gif,svg',
            'name' => 'between:4,30',
            'language' => Rule::in(SupportedLanguages::$type)
        ]);

        $user = User::findOrFail($user_id);

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

        $is_anything_updated = ResourceUpdater::update($request->only('name', 'language'), $user) || $is_anything_updated;

        return response()->noContent($is_anything_updated ? Response::HTTP_OK : Response::HTTP_NOT_MODIFIED);
    }

    public function getStudySets(Request $request, $user_id)
    {
        $type = $request->type;

        if ($type === 'my') {
            $user = User::findOrFail($user_id);

            return response()->json([
                'studySets' => $user->studySets
            ]);
        }

        // FIXME: Need to normalize the response results
        $study_sets = DB::table('user_study_sets')
            ->select('id', 'role', 'title', 'view_permission', 'edit_permission', 'created_at', 'updated_at')
            ->join('study_sets', 'study_set_id', '=', 'id')
            ->where('user_id', '=', $user_id)->get()->toArray();

        return response()->json([
            'studySets' => $study_sets
        ]);
    }
}
