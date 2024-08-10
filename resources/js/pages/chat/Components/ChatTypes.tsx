import User from "../../../models/User";

export interface ChatList {
    isOpen: boolean;
    onClose: ()=> void;
    friends: []
}
export interface ChatUserList {
    userChat: [];
}
export interface Chat {
    id: number;
    conversations: string;
    createdAt: string;
    user: User;
    lastSeen: string;
    isUser: boolean;
}