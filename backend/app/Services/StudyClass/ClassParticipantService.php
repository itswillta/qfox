<?php

namespace App\Services\StudyClass;

use App\Enums\ClassRole;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class ClassParticipantService
{
    private const CACHE_TTL = 3600; // seconds

    public static function getOwnerId($class_id)
    {
        return Cache::rememberForever('class_' . $class_id . '_owner_id', function () use ($class_id) {
            return DB::table('user_classes')->where([
                ['class_id', '=', $class_id],
                ['role', '=', ClassRole::OWNER]
            ])->first()->user_id;
        });
    }

    public static function getAdminIds($class_id)
    {
        return Cache::remember('class_' . $class_id . '_admin_ids', self::CACHE_TTL, function () use ($class_id) {
            return array_map(function ($user_class_record) {
                return $user_class_record->user_id;
            }, DB::table('user_classes')
                ->where('class_id', '=', $class_id)
                ->whereIn('role', [ClassRole::OWNER, ClassRole::ADMIN])->get()->toArray()
            );
        });
    }
}