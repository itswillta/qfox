<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LiveSessionDetail extends Model
{
    protected $primaryKey = ['session_id', 'user_id', 'term_id'];
    public $incrementing = false;

    /**
     * The related live session
     */
    function session() {
        return $this->belongsTo('App\LiveSession');
    }

    /**
     * The user that participates in this live session
     */
    function user() {
        return $this->belongsTo('App\User');
    }

    /**
     * The related term
     */
    function term() {
        return $this->belongsTo('App\Term');
    }

    /**
     * Set the keys for a save update query.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function setKeysForSaveQuery(Builder $query)
    {
        $keys = $this->getKeyName();
        if(!is_array($keys)){
            return parent::setKeysForSaveQuery($query);
        }

        foreach($keys as $keyName){
            $query->where($keyName, '=', $this->getKeyForSaveQuery($keyName));
        }

        return $query;
    }

    /**
     * Get the primary key value for a save query.
     *
     * @param mixed $keyName
     * @return mixed
     */
    protected function getKeyForSaveQuery($keyName = null)
    {
        if(is_null($keyName)){
            $keyName = $this->getKeyName();
        }

        if (isset($this->original[$keyName])) {
            return $this->original[$keyName];
        }

        return $this->getAttribute($keyName);
    }
}
