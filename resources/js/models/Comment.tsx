import fakeComment from './comment.json';

export default class Comment {
    id: number;
    userName: string;
    postId: number;
    comment: string;
    createdAt: string;
    userProfile: string;

    constructor(json:{ id: number, userName: string, postId: number, comment: string, createdAt: string, userProfile: string}) {
        this.id = json.id;
        this.userName = json.userName;
        this.postId = json.postId;
        this.comment = json.comment;
        this.createdAt = json.createdAt;
        this.userProfile = json.userProfile;
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