<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
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
            'body' => $this->body,
            'createdAt' => $this->created_at,
            'user' => new UserResource($this->whenLoaded('user')), 
            'commentableId'=>$this->commentable_id,
            'commentableType' => $this->commentable_type,
        ];
    }
}
