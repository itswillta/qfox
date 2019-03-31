<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class StudySetPermission extends Enum
{
    const EVERYONE = "everyone";
    const USER_WITH_A_PASSWORD = "user_with_a_password";
    const JUST_ME = "just_me";

    public static $viewPermission = [self::EVERYONE, self::USER_WITH_A_PASSWORD, self::JUST_ME];
    public static $editPermission = [self::USER_WITH_A_PASSWORD, self::JUST_ME];
}
