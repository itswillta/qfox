<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StudySet extends Model
{
    /**
     * The users that have access to this study set.
     */
    public function users()
    {
        return $this->belongsToMany('App\User');
    }

    /**
     * The classes that this study set may belong to
     */
    public function classes()
    {
        return $this->belongsToMany('App\StudyClass', 'study_set_classes');
    }

    /**
     * The terms this study set has
     */
    public function terms()
    {
        return $this->hasMany('App\Term', 'study_set_terms');
    }
}
