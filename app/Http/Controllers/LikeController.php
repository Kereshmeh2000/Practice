<?php

namespace App\Http\Controllers;

use App\Models\Like;
use Illuminate\Http\Request;
use App\Http\Resources\LikeResource;

class LikeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return LikeResource::Collection(Like::all())->toJson();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return new LikeResource(Like::create($request->all()));
    }

    public function update(Request $request, Like $like)
    {
        $like->update($request->all());
        return new  LikeResource($like);
    }

    public function destroy(Like $like)
    {
        $like->delete();
        return response()->json(null, 204);
    }
}
