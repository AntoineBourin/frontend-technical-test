import { GetServerSidePropsContext } from 'next';
import { AppContext } from 'next/app';
import type { FC } from 'react';
import ConversationHead from '../../components/molecules/ConversationHead';
import ConversationMessages from '../../components/molecules/ConversationMessages';
import getUserConversations, { getConversationMessagesById } from '../../services/api/conversations';
import { Conversation } from '../../types/conversation';
import { Message } from '../../types/message';
import { User } from '../../types/user';
import { getLoggedUserId } from '../../utils/getLoggedUserId';

interface ConversationPageProps {
    conversationMessages: Message[];
    conversationDetails: Conversation;
    userId: User['id'];
}

const ConversationPage: FC<ConversationPageProps> = ({ conversationMessages, conversationDetails, userId }) => {
    return (
        <div>
            <ConversationHead
                conversation={conversationDetails}
                userLoggedId={userId}
            />
            <ConversationMessages
                conversationMessages={conversationMessages}
                userLoggedId={userId}
                conversation={conversationDetails}
            />
        </div>
    )
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { query } = context;
    const userId = getLoggedUserId();
    const userConversations = await getUserConversations(userId);
    const conversationDetails = userConversations.find(conversation => conversation.id.toString() === query.id);
    const conversationMessages = await getConversationMessagesById(query.id as string);

    if (!conversationDetails || !conversationMessages) {
        return {
            notFound: true,
        };
    }
  
    // Pass data to the page via props
    return { 
        props: {
            userId,
            conversationMessages,
            conversationDetails
        } 
    }
  }

export default ConversationPage;