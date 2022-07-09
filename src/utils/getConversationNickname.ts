import { Conversation } from "../types/conversation";
import { User } from "../types/user";

const getConversationNickname = (conversation: Conversation, userLoggedId: User['id']): string => {
    const isUserSender = userLoggedId === conversation.senderId;
    return isUserSender ? conversation.recipientNickname : conversation.senderNickname;
};

export default getConversationNickname;