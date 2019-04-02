<?php
/**
 * Created by PhpStorm.
 * User: huytq
 * Date: 4/2/19
 * Time: 1:41 PM
 */

namespace App\Services;

use Illuminate\Http\Request;

class ResourceUpdater
{
    public static function update(Request $request, $resource)
    {
        $is_anything_updated = false;

        foreach ($request->all() as $property => $newValue) {
            if ($resource->$property !== $newValue) {
                $is_anything_updated = true;
                $resource->$property = $newValue;
            }
        }

        if ($is_anything_updated) {
            $resource->save();
        }

        return $is_anything_updated;
    }
}