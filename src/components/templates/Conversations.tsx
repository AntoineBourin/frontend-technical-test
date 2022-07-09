import type { FC } from 'react';
import { Conversation as ConversationType } from '../../types/conversation';
import { User } from '../../types/user';
import Conversation from '../molecules/Conversation';
import styles from '../../styles/Conversations.module.css'

interface ConversationsProps {
    conversations: ConversationType[];
    userLoggedId: User['id'];
}

const Conversations: FC<ConversationsProps> = ({ conversations, userLoggedId }) => {
    return (
        <section className={styles.section}>
            {conversations.map(conversation => 
                <Conversation
                    key={conversation.id}
                    conversation={conversation}
                    userLoggedId={userLoggedId}
                />
            )}
        </section>
    );
};

export default Conversations;