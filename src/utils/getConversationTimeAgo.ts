import { formatDistance } from "date-fns";

const getConversationTimeAgo = (lastMessageTimestamp: number): string => {
    return formatDistance(
        new Date(lastMessageTimestamp * 1000),
        new Date(),
        { addSuffix: true }
    );
};

export default getConversationTimeAgo;