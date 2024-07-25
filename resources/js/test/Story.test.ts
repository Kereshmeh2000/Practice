import {it, describe, expect} from "vitest";
import Story from "../models/Story";
import fakeStory from "../models/story.json";

describe("story test", () => {
    it("should return a story", () => {
        const testStory = fakeStory[0];
        const story = Story.fromJson(testStory);
        expect(story.image).toBe(testStory.image);
        expect(story.createdAt).toBe(testStory.createdAt);
        expect(story.user.profileImage).toBe(testStory.user.profileImage);
        expect(story.id).toBe(testStory.id);
    })
    it("should return all stories", async () => {
        const stories = await Story.all();
        expect(stories.length).toBeGreaterThan(0);
    })
})