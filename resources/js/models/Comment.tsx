import fakeComment from './comment.json';
import { Post } from './Post';
import User from './User';

export default class Comment {
    id: number;
    comment: string;
    createdAt: string;
    user: [];
    post: [];

    constructor(json:{ id: number, comment: string, createdAt: string, user: [], post: [] }) {
        this.id = json.id;
        this.comment = json.comment;
        this.createdAt = json.createdAt;
        this.user =  json.user;
        this.post = json.post;
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