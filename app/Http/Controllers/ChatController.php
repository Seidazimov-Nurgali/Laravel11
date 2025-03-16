<?php

namespace App\Http\Controllers;

use App\Events\ChatAnswered;
use App\Events\ChatCreated;
use App\Http\Resources\ChatResource;
use App\Models\Chat;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $chats = Chat::whereNull('parent_id')->get();

        return Inertia::render('Site/Chat', [
            'chats' => ChatResource::collection($chats),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'text' => 'required|string',
            'parent_id' => 'nullable|exists:chats,id',
        ]);

        $chat = Chat::create([
            'text' => $request->text,
            'user_id' => $request->user()->id,
            'parent_id' => $request->parent_id,
        ]);

        is_null($chat->parent_id)
            ? broadcast(new ChatCreated($chat))
            : broadcast(new ChatAnswered($chat->text, $chat->parent_id));

        return redirect()->back();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Chat $chat)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chat $chat)
    {
        //
    }
}
