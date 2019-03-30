<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class StudySetPermission extends Enum
{
    const EVERYONE = "Everyone";
    const USER_WITH_A_PASSWORD = "User with a password";
    const JUST_ME = "Just me";

    public static $viewPermission = [self::EVERYONE, self::USER_WITH_A_PASSWORD, self::JUST_ME];
    public static $editPermission = [self::USER_WITH_A_PASSWORD, self::JUST_ME];
}
