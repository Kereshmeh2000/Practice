<?php

namespace Tests\Feature;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Carbon;
use Tests\TestCase;

class PostResourceTest extends TestCase
{
    use RefreshDatabase;

    public function testPostResourceStructure()
    {
        // ino vaght nashod emshab minevisamesh;:-)
        $post = Post::factory()->create();

        $postResource = new PostResource($post);

        $this->assertEquals($post->id, $postResource->id);
        $this->assertEquals($post->caption, $postResource->caption);
    }
}
