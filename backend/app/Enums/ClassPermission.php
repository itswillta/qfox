<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class ClassPermission extends Enum
{
    const ALLOW = "Allow";
    const NOT_ALLOW = "Not allow";

    public static $type = [self::ALLOW, self::NOT_ALLOW];
}
