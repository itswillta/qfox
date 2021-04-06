<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class StudySetPermission extends Enum
{
    const EVERYONE = 'everyone';
    const LOGGED_IN_USERS = 'logged_in_users';
    const JUST_ME = 'just_me';

    public static $view_permission_types = [self::EVERYONE, self::LOGGED_IN_USERS, self::JUST_ME];
    public static $edit_permission_types = [self::LOGGED_IN_USERS, self::JUST_ME];
}
