import fakePostData from './post.json'
import User from './User';

export default class Post {
    id: number;
    caption: string;
    image: string;
    user: User;
    createdAt: string;

    constructor(json: {
        id: number;
        caption: string;
        image: string;
        user: User;
        createdAt: string;
    }) {
        this.id = json.id;
        this.caption = json.caption;
        this.image = json.image;
        this.user = User.fromJson(json.user);
        this.createdAt = json.createdAt;
    }

    static fromJson(json: any): Post {
        return new Post(json);
    }

    static async all(): Promise<Post[]> {
        try {
            return fakePostData.map((post) => Post.fromJson(post));
        }
        catch {
            throw new Error('Error fetching posts')
        }
    }
}