<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    public function index(Request $request)
    {
        $posts = Post::with('user')->get();
        return response()->json(PostResource::collection($posts));

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        return new PostResource(Post::create($request->all()));
    }

    public function update(Request $request, Post $post)
    {
        $post->update($request->all());
        return new PostResource($post);
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return response()->json(null, 204);
    }
}
