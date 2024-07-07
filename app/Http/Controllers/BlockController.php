<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlockResource;
use App\Models\Block;
use Illuminate\Http\Request;

class BlockController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $blocks=Block::all();
        return BlockResource::Collection($blocks->load('user'))->toJson();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return new BlockResource(Block::create($request->all()));
    }

    public function update(Request $request, Block $block)
    {
        $block->update($request->all());
        return new  BlockResource($block);
    }

    public function destroy(Block $block)
    {
        $block->delete();
        return response()->json(null, 204);
    }
}
