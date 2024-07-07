<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Blog;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class BlogTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function test_blog_index(): void
    {
        Blog::factory()->count(1)->create();
        $response = $this->get('/api/blogs');
        $response->assertStatus(200);
        $response->assertJsonCount(1);
    }

    public function test_blog_store(): void
    {
        $data = [
            'title'=>' dolorem',
            'body' => 'Tenetur ut dolorem minus voluptatem accusamus. Quis non a qui quidem est. Ut aut voluptas reiciendis vel.',
        ];

        $response = $this->post('/api/blogs', $data);

        $response->assertStatus(201);
        $this->assertDatabaseHas('blogs', [
            'title'=>'dolorem',
            'body' => 'Tenetur ut dolorem minus voluptatem accusamus. Quis non a qui quidem est. Ut aut voluptas reiciendis vel.',

        ]);
    }

    public function test_blog_update(): void
    {
        $data = Blog::factory()->make()->toArray();
        $blog = Blog::factory()->create();
        $response = $this->put("/api/blogs/{$blog->id}", $data);
        $response->assertStatus(200);
        self::assertDatabaseHas('blogs', [
            'id' => $blog->id,
        ]);
    }

    public function test_blog_delete(): void
    {
        $blog = Blog::factory()->create();
        $response = $this->delete("/api/blogs/{$blog->id}");
        $response->assertStatus(204);
        self::assertDatabaseMissing('blogs', [
            'id' => $blog->id,
        ]);
    }
}
