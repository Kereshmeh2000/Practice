<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Like;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;


class LikeTest extends TestCase
{
    use RefreshDatabase;

    public function test_like_index(): void
    {
        $response = $this->get('/api/likes');
        $response->assertStatus(200);
        $response->assertJsonStructure([
            '*' => ['id', 'likable_type', 'likable_id', 'created_at', 'updated_at'],
        ]);
    }

    public function test_like_store(): void
    {
        $user = User::factory()->create();
        $response = $this->postJson('/api/likes', [
            'user_id' => $user->id,
            'likable_id' => 1,
            'likable_type' => 'App\Models\Story' // or 'App\Models\Blog'
        ]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('likes', [
            'user_id' => $user->id,
            'likable_id' => 1,
            'likable_type' => 'App\Models\Story' // or 'App\Models\Blog'
        ]);
    }

    public function test_like_update(): void
    {
        $data = Like::factory()->make()->toArray();
        $like = Like::factory()->create();
        $response = $this->put("/api/likes/{$like->id}", $data);
        $response->assertStatus(200);
        self::assertDatabaseHas('likes', [
            'id' => $like->id,
        ]);
    }

    public function test_like_delete(): void
    {
        $like = Like::factory()->create();
        $response = $this->delete("/api/likes/{$like->id}");
        $response->assertStatus(204);
        self::assertDatabaseMissing('likes', [
            'id' => $like->id,
        ]);
    }
}
