<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StudyClass extends Model
{
    /**
     * The users that are related to this class.
     */
    public function users()
    {
        return $this->belongsToMany('App\User', 'user_classes', 'class_id', 'user_id');
    }

    /**
     * The study sets that may belong to this class
     */
    public function studySets()
    {
        return $this->belongsToMany('App\StudySet', 'study_set_classes', 'class_id', 'study_set_id');
    }
}
