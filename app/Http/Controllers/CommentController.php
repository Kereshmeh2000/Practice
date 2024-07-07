<?php

namespace App\Http\Controllers;

use App\Http\Resources\CommentResource;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $comments = Comment::with('user')->get();
        return response()->json(CommentResource::collection($comments));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        return new CommentResource(Comment::create($request->all()));
    }

    public function update(Request $request, Comment $comment)
    {
        $comment->update($request->all());
        return new CommentResource($comment);
    }

    public function destroy(Comment $comment)
    {
        $comment->delete();
        return response()->json(null, 204);
    }
}
