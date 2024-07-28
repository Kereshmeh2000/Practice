import fakeComment from './comment.json';
import User from './User';

export default class Comment {
    id: number;
    body: string;
    createdAt: string;
    user: User;

    constructor(json:{ id: number, body: string, createdAt: string, user: [] }) {
        this.id = json.id;
        this.body = json.body;
        this.createdAt = json.createdAt;
        this.user =  User.fromJson(json.user);
    }

    static async all(): Promise<Comment[]> {
        return fakeComment.map((comment) => {
            return Comment.fromJson(comment);
        });
    }

    static fromJson = (json: any): Comment => {
        return new Comment(json);
    }
}