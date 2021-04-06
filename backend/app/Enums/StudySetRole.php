<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class StudySetRole extends Enum
{
    const OWNER = 'owner';
    const LEARNER = 'learner';
}
