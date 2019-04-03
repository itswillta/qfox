<?php

namespace App\Services\StudyClass;

use App\Enums\ClassRole;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class ClassOwnerService
{
    public static function getOwnerId($class_id)
    {
        return Cache::rememberForever('class_' . $class_id . '_owner_id', function () use ($class_id) {
            // FIXME use ->first() instead of ->get()[0]
            return DB::table('user_classes')->where([
                ['class_id', '=', $class_id],
                ['role', '=', ClassRole::OWNER]
            ])->get()[0];
        });
    }
}