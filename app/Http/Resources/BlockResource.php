<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BlockResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
        'id' => $this->id,
        'createdAt' => $this->created_at,
        'user' => new UserResource($this->whenLoaded('user')),
        'bloackableId'=>$this->blockable_id,
        'bloackableType' => $this->blockable_type
    ];
    }
}
