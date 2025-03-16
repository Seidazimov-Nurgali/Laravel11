<?php

use App\Models\Chat;
use App\Models\User;
use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

//private
Broadcast::channel('chats.{id}', function (User $user, $parent_id) {
    return (int) $user->id === Chat::findOrNew($parent_id)->user_id;
});

//whisper
Broadcast::channel('chat-channel.{id}', function (User $user, $id) {
    return true;
});

//presence
Broadcast::channel('presence.{id}', function (User $user, $id) {
    return ['id' => $user->id, 'name' => $user->name];
});
