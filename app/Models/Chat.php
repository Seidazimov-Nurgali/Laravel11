<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Chat extends Model
{
    protected $fillable = ['parent_id', 'user_id', 'text'];

    public function user(): belongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function parent(): belongsTo
    {
        return $this->belongsTo(Chat::class, 'parent_id');
    }

    public function children(): hasMany
    {
        return $this->hasMany(Chat::class, 'parent_id');
    }
}
