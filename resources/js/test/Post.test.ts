import {it, describe, expect} from "vitest";
import Post from "../models/Post";
import fakePost from "../models/post.json";

describe("post test", () => {
    it("should return a post", () => {
        const testPost = fakePost[0];
        const post = Post.fromJson(testPost);
        expect(post.image).toBe(testPost.image);
        expect(post.createdAt).toBe(testPost.createdAt);
        expect(post.user.profileImage).toBe(testPost.user.profileImage);
        expect(post.id).toBe(testPost.id);
    })
    it("should return all posts", async () => {
        const posts = await Post.all();
        expect(posts.length).toBeGreaterThan(0);
    })
})