import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FC, FormEvent, useState } from 'react';
import styles from '../../styles/ConversationInput.module.css';

interface ConversationInputProps {
    handleMessageSent: (text: string) => void;
}

const ConversationInput: FC<ConversationInputProps> = ({ handleMessageSent }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        handleMessageSent(inputValue);
        setInputValue("");
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                data-testid="input"
                className={styles.input}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Send message"
            />
            <button className={styles.button}>
                <FontAwesomeIcon className={`${styles.icon} ${inputValue.length > 0 && styles.canSend}`} icon={faPaperPlane} />
            </button>
        </form>
    );
};

export default ConversationInput;