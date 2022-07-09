import type { FC } from 'react';
import { Conversation } from '../../types/conversation';
import { User } from '../../types/user';
import getConversationNickname from '../../utils/getConversationNickname';
import getConversationTimeAgo from '../../utils/getConversationTimeAgo';
import styles from '../../styles/ConversationHead.module.css';

interface ConversationHeadProps {
    conversation: Conversation;
    userLoggedId: User['id'];
}

const ConversationHead = ({ conversation, userLoggedId }) => {
    const nickName = getConversationNickname(conversation, userLoggedId);
    const lastMessageTimeAgo = getConversationTimeAgo(conversation.lastMessageTimestamp);
    
    return (
      <header className={styles.header}>
        <p>{nickName} - You</p>
        <p>Last message {lastMessageTimeAgo}</p>
      </header>
    );
};

export default ConversationHead;