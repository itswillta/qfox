<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LiveSession extends Model
{
    /*
     * The user that hosts this live session
     */
    public function host()
    {
        return $this->belongsTo('App\User');
    }

    /*
     * The details of this live session
     */
    public function details()
    {
        return $this->hasMany('App\LiveSessionDetail');
    }
}
