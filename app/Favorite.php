<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    public function users()
    {
        return $this->belongsTo('App\User', 'id');
    }
}
