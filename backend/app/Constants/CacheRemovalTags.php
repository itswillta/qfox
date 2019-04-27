<?php


namespace App\Constants;


class CacheRemovalTags
{
    const USER = [
        'SAVE' => 'user_save'
    ];

    const STUDY_CLASS = [
        'SAVE' => 'study_class_save',
        'DELETE' => 'study_class_delete'
    ];

    const STUDY_SET = [
        'SAVE' => 'STUDY_SET_SAVE',
        'DELETE' => 'STUDY_SET_DELETE'
    ];

    const TERM = [
        'SAVE' => 'term_save',
        'DELETE' => 'term_delete'
    ];
}