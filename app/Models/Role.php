<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = ['name'];

    public const IS_USER = 1;

    public const IS_MANAGER = 2;

    public const IS_ADMIN = 3;
}
