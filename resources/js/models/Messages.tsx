import User from "./User";
import fakeChat from './messages.json';

export default class Messages {
    id:number; 
    conversations: string;
    createdAt: string;
    user: User;
    lastSeen: string;
    isUser: boolean;

    constructor(json: {id: number, conversations: string, createdAt: string, user: User, lastSeen: string, isUser: boolean}) {
        this.id = json.id;
        this.conversations = json.conversations;
        this.createdAt = json.createdAt;
        this.user = json.user;
        this.lastSeen = json.lastSeen;
        this.isUser = json.isUser;
    }

    static async all(): Promise<Messages[]> {
        return fakeChat.map((chat) => {
            return Messages.fromJson(chat);
        });
    }

    static fromJson = (json: any): Messages => {
        return new Messages(json);
    }
}