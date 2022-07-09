import axios from "axios";
import { Conversation } from "../../types/conversation";
import { Message } from "../../types/message";
import { User } from "../../types/user";

const addMessageInConversation = (conversationId: Conversation['id'], text: string, authorId: User['id']): Promise<Message | null> => {
    return axios.post(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/messages/${conversationId}`,
            { body: text, timestamp: Date.now() / 1000, conversationId, authorId }
        )
        .then(response => response.data)
};

export default addMessageInConversation;