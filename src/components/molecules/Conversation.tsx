import type { FC } from 'react';
import { formatDistance } from 'date-fns';
import { Conversation as ConversationType } from '../../types/conversation';
import { User } from '../../types/user';
import getConversationNickname from '../../utils/getConversationNickname';
import ConversationPicture from '../atoms/ConversationPicture';
import styles from '../../styles/Conversation.module.css';
import Link from 'next/link';
import getConversationTimeAgo from '../../utils/getConversationTimeAgo';

interface ConversationProps {
    conversation: ConversationType;
    userLoggedId: User['id'];
}

const Conversation: FC<ConversationProps> = ({ conversation, userLoggedId }) => {
    const nickName = getConversationNickname(conversation, userLoggedId);
    const timeAgo = getConversationTimeAgo(conversation.lastMessageTimestamp);

    return (
        <Link href={`/conversation/${conversation.id}`}>
            <a className={styles.main}>
                <ConversationPicture nickName={nickName} />
                <div>
                    <p className={styles.nickName}>{nickName}</p>
                    <p className={styles.time}>{timeAgo}</p>
                </div>
            </a>
        </Link>
    );
}

export default Conversation;