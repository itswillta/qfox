<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'username', 'password', 'googleId', 'facebookId'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password'
    ];

    /**
     * The study sets that this user currently has (including both study sets created by that user and study sets created
     * by others).
     */
    public function studySets()
    {
        return $this->belongsToMany('App\Term', 'user_study_sets');
    }

    /**
     * The classes this user may be related to.
     */
    public function classes()
    {
        return $this->belongsToMany('App\StudyClass', 'user_classes');
    }

    /**
     * The terms this user may be currently learning
     */
    public function learningTerms()
    {
        return $this->belongsToMany('App\Term', 'user_terms');
    }

    /**
     * The live sessions this user may be the host
     */
    public function hostedLiveSessions()
    {
        return $this->hasMany('App\LiveSession');
    }

    /*
     * The details of all live sessions this user is related to
     */
    public function liveSessionDetails()
    {
        return $this->hasMany('App\LiveSessionDetail');
    }
}