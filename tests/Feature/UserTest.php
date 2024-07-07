<?php

namespace Tests\Feature;


use Tests\TestCase;
use App\Models\User;
use App\Models\Comment;
use App\Models\Message;
use App\Models\Profile;
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    use RefreshDatabase;
    public function test_user_index(): void
    {
        User::truncate();
        $user = User::factory()->count(1)->create();
        $response = $this->get('/api/users');
        $response->assertStatus(200);
        $response->assertJsonCount(1);
    }


    public function test_user_store(): void
    {
        $data = [
            'name' => 'john', 'birthday' => '1990-01-01', 'email' => 'john@gmail.com', 'is_admin' => 'false', 'gender' => 'male', 'weight' => 70.5,
            'height' => 175.0,
            'marital_status' => 'single',
            'has_hijab' => false,
            'living_city' => 'New York',
            'living_district' => 'Manhattan',
            'eye_color' => 'brown',
            'hair_color' => 'black',
            'skin_color' => 'white',
            'body_type' => 'Average',
            'has_disability' => false,
            'has_child' => false,
            'want_child' => true,
            'is_alcoholic' => false,
            'lives_with' => 'alone',
            'education' => 'Bachelor\'s Degree',
            'profession' => 'Software Engineer',
            'income' => 80000.0,
            'job_type' => 'Full-time',
        ];
        $data['password'] = bcrypt(1234);
        $response = $this->post('/api/users', $data);
        $response->assertStatus(201);
        $this->assertDatabaseHas('users', $data);
    }

    public function test_user_update(): void
    {
        $data = User::factory()->make()->toArray();
        $user = User::factory()->create();
        $response = $this->put("/api/users/{$user->id}", $data);
        $response->assertStatus(200);
        self::assertDatabaseHas('users', [
            'id' => $user->id,
        ]);
    }

    public function test_user_delete(): void
    {
        $user = User::factory()->create();
        $response = $this->delete("/api/users/{$user->id}");
        $response->assertStatus(204);
        self::assertDatabaseMissing('users', [
            'id' => $user->id,
        ]);
    }

    // public function test_user_relationship_with_profile()
    // {
    //     $user = User::factory()->hasImage()->create();
    //     $this->assertNotNull($user->images);
    //     $this->assertInstanceOf(Image::class, $user->images);
    // }
    public function test_user_relationship_with_comment()
    {

        User::truncate();
        $count = rand(1, 10);
        $user = User::factory()->hasComments($count)->create();
        $this->assertCount($count, $user->comments);
        $this->assertTrue($user->comments->first() instanceof Comment);
    }
}
