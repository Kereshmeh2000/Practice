import fakePostData from './post.json'
import User from './User';

export class Post {
    id: number;
    caption: string;
    image: string;
    author: User;
    createdAt: string;

    constructor(json: {
        id: number;
        caption: string;
        image: string;
        author: User;
        createdAt: string;
    }) {
        this.id = json.id;
        this.caption = json.caption;
        this.image = json.image;
        this.author = json.author;
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