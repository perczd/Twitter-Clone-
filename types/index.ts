export type User = {
    id: string;
    username: string;
    name: string;
    image?: string;
};

export type TweetType = {
    id: string;
    content: string;
    user: User;
    createdAt: string;
    image?: string;
    video?: string;
    numberOfComments?: number,
    numberOfRetweets?: number,
    numberOfLikes?: number,
    impressions?: number,
};

export type SearchType = {
    headerTopic: string;
    mainTopic: string;
    footerTopicMain: string;
    footerTopic: string;
};

export type NotificationType = {
    content: string;
    username: User;
    image?: string;
    hashtag?: string;
    
    
};