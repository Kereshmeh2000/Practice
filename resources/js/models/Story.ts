import fakeStory from './story.json';
import User from './User';

export default class Story {
    id: number;
    image: string;
    createdAt: string;
    user: User;

    constructor(json: { id: number, image: string, createdAt: string, user: User }) {
        this.id = json.id;
        this.image = json.image;
        this.createdAt = json.createdAt;
        this.user = json.user;
    }

    static fromJson(json: any): Story {
        return new Story(json);
    }

    static async all(): Promise<Story[]> {
            try{
                return fakeStory.map((story) => Story.fromJson(story))
            }
            catch{
                throw new Error('Error fetching users')
            }
    }
}