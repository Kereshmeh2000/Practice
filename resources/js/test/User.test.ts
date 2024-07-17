import { describe, it, expect } from "vitest";
import User from "../models/User";
import  fakeUser  from "../models/user.json";

describe ("user test", () => {
    it("", () => {
        const testUser = fakeUser[0];
        const user = User.fromJson(testUser);
        expect(user.name).toBe(testUser.name);
        expect(user.email).toBe(testUser.email);
        expect(user.id).toBe(testUser.id);
    })

    it("", async () => {
        const users = await User.all();
        expect(users.length).toBeGreaterThan(0);
    })
})