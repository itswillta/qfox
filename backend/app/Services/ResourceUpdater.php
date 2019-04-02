<?php

namespace App\Services;

class ResourceUpdater
{
    public static function update($fields_to_update, $resource)
    {
        $is_anything_updated = false;

        foreach ($fields_to_update as $property => $newValue) {
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