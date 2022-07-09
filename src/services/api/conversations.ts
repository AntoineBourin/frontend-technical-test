import axios from "axios";
import { Conversation } from "../../types/conversation";
import { Message } from "../../types/message";
import { User } from "../../types/user";

const getUserConversations = (userId: User['id']): Promise<Conversation[]> => {
    return axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/conversations/${userId}`)
        .then(response => response.data)
        .catch(() => []);
};

export const getConversationMessagesById = (conversationId: string): Promise<Message[] | null> => {
    return axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/messages/${conversationId}`)
        .then(response => response.data)
        .catch(() => null);
}

export default getUserConversations;