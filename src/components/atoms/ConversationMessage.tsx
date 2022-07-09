import type { FC } from 'react';
import { format } from 'date-fns';
import { Message } from '../../types/message';
import { User } from '../../types/user';
import styles from '../../styles/ConversationMessage.module.css';

interface ConversationMessageProps {
    message: Message;
    userLoggedId: User['id'];
}

const ConversationMessage: FC<ConversationMessageProps> = ({ message, userLoggedId }) => {
    const currentUserIsAuthorOfMessage = message.authorId === userLoggedId;
    const date = format(new Date(message.timestamp * 1000), 'MM/dd/yyyy HH:mm');

    return (
        <div className={`${styles.message} ${currentUserIsAuthorOfMessage ? styles.yours : styles.other}`}>
            <p>{message.body}</p>
            <p className={styles.date}>{date}</p>
        </div>
    );
};

export default ConversationMessage;