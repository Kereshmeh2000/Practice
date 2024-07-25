import {it, describe, expect} from "vitest";
import Comment from "../models/Comment";
import fakeComment from "../models/comment.json";

describe("comment test", () => {
    it("should return a comment", () => {
        const testComment = fakeComment[0];
        const comment = Comment.fromJson(testComment);
        expect(comment.body).toBe(testComment.body);
        expect(comment.createdAt).toBe(testComment.createdAt);
        expect(comment.user.profileImage).toBe(testComment.user.profileImage);
        expect(comment.id).toBe(testComment.id);
    })
    it("should return all comments", async () => {
        const comments = await Comment.all();
        expect(comments.length).toBeGreaterThan(0);
    })
})