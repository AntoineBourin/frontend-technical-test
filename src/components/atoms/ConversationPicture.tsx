import type { FC } from 'react';
import styles from '../../styles/ConversationPicture.module.css'

interface ConversationPictureProps {
    nickName: string
}

const pictureColor = '#F54337';

const ConversationPicture: FC<ConversationPictureProps> = ({ nickName }) => {
    return (
        <div className={styles.main} style={{ backgroundColor: pictureColor }}>
            {nickName.substring(0, 1)}
        </div>
    )
};

export default ConversationPicture;

