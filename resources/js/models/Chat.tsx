import User from "./User";
import fakeChat from './chat.json';

export default class Chat {
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

    static async all(): Promise<Chat[]> {
        return fakeChat.map((chat) => {
            return Chat.fromJson(chat);
        });
    }

    static fromJson = (json: any): Chat => {
        return new Chat(json);
    }
}