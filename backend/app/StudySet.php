<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Elasticquent\ElasticquentTrait;

/**
 * Class StudySet
 * @package App
 * @property int $id
 * @property string $title
 * @property \App\Enums\StudySetPermission $view_permission
 * @property \App\Enums\StudySetPermission $edit_permission
 */
class StudySet extends Model
{
    use ElasticquentTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'view_permission', 'edit_permission'
    ];

    /**
     * Set a mappingProperties property for mapping in Elasticsearch/Eloquent
     *
     *
     */
    protected $mappingProperties = array(
        'title' => [
            'type' => 'string',
            "analyzer" => "standard"
        ]
    );

    /**
     * The users that have access to this study set.
     */
    public function users()
    {
        return $this->belongsToMany('App\User', 'user_study_sets',
            'study_set_id', 'user_id');
    }

    /**
     * The classes that this study set may belong to
     */
    public function classes()
    {
        return $this->belongsToMany('App\StudyClass', 'study_set_classes', 'class_id', 'study_set_id');
    }

    /**
     * The terms this study set has
     */
    public function terms()
    {
        return $this->hasMany('App\Term');
    }
}
