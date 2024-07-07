<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'name' => $this->name,
            'gender' => $this->gender,
            'isAdmin' => $this->is_admin,
            'email' => $this->email,
            'birthday' => $this->birthday,
            'skinColor' => $this->skin_color,
            'weight' => $this->weight,
            'height' => $this->height,
            'maritalStatus' => $this->marital_status,
            'hasHijab' => $this->has_hijab,
            'livingCity' => $this->living_city,
            'livingDistrict' => $this->living_district,
            'eyeColor' => $this->eye_color,
            'hairColor' => $this->hair_color,
            'skinColor' => $this->skin_color,
            'bodyType' => $this->body_type,
            'hasDisability' => $this->has_disability,
            'hasChild' => $this->has_child,
            'wantChild' => $this->want_child,
            'isAlcoholic' => $this->is_alcoholic,
            'livesWith' => $this->lives_with,
            'education' => $this->education,
            'profession' => $this->profession,
            'income' => $this->income,
            'jobType' => $this->job_type,
            'createdAt' => $this->created_at,
            'password' => $this->password,
            'images' => ImageResource::collection($this->whenLoaded('images')),

        ];
    }
}
