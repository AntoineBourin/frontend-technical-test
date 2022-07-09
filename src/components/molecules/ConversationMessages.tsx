import { FC, useState } from 'react';
import { Message } from '../../types/message';
import { User } from '../../types/user';
import ConversationMessage from '../atoms/ConversationMessage';
import styles from '../../styles/ConversationMessages.module.css';
import ConversationInput from '../atoms/ConversationInput';
import addMessageInConversation from '../../services/api/messages';
import { Conversation } from '../../types/conversation';

interface ConversationMessagesProps {
    conversationMessages: Message[];
    conversation: Conversation;
    userLoggedId: User['id'];
}

const ConversationMessages: FC<ConversationMessagesProps> = ({ conversationMessages, userLoggedId, conversation }) => {
    const [messages, setMessages] = useState(conversationMessages);

    const handleNewMessageSent = (inputText: string): void => {
        // need to think about optimistic rendering here
        addMessageInConversation(conversation.id, inputText, userLoggedId)
            .then(message => setMessages((oldMessages) => ([...oldMessages, message])));
    }

    return (
        <>
            <section className={styles.messages}>
                {messages.map(conversationMessage => (
                    <ConversationMessage
                        message={conversationMessage}
                        userLoggedId={userLoggedId}
                        key={conversationMessage.id}
                    />
                ))}
            </section>
            <div className={styles.inputConversation}>
                <ConversationInput handleMessageSent={handleNewMessageSent} />
            </div>
        </>
    );
};

export default ConversationMessages;