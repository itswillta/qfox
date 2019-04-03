<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class ClassRole extends Enum
{
    const OWNER = 'owner';
    const ADMIN = 'admin';
    const MEMBER = 'member';
}
