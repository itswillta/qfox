<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Term
 * @package App
 * @property int $id
 * @property string $term
 * @property string $definition
 * @property bool $is_starred
 * @property int $study_set_id
 */
class Term extends Model
{
    /**
     * The study set this term belongs to
     */
    public function studySet()
    {
        return $this->belongsTo('App\StudySet', 'study_set_id');
    }

    /**
     * The learners of this term
     */
    public function learners()
    {
        return $this->belongsToMany('App\User');
    }

    /*
     * The details of all live sessions where this term is used
     */
    public function liveSessionDetails()
    {
        return $this->hasMany('App\LiveSessionDetail');
    }
}
