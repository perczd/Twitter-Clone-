import React from 'react';
import { StyleSheet, View, FlatList, Pressable, Text } from 'react-native';
import tweets from '../../../assets/data/tweets';
import Tweet from '../../../components/Tweet';
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';
import topics from '../../../assets/data/topics';
import Topic from '../../../components/Topic';

type TopicType = {
  id: string;
  title: string; // Add other properties specific to topics
};

type TweetType = {
  id: string;
  content: string; // Add other properties specific to tweets
};

type ItemType = TopicType | TweetType;

export default function SearchScreen() {
  // Combine the data arrays
  const combinedData: ItemType[] = [...topics.map((topic) => ({ ...topic, type: 'topic' })), ...tweets.map((tweet) => ({ ...tweet, type: 'tweet' }))];

  // Render items based on their type (Topic or Tweet)
  const renderItem = ({ item }: { item: ItemType }) => {
    if (item.type === 'topic') {
      return <Topic topic={item as TopicType} />;
    } else if (item.type === 'tweet') {
      return <Tweet tweet={item as TweetType} />;
    }
    return null; // Handle other types if necessary
  };

  return (
    <View style={styles.page}>
      <Text style={{ paddingTop: 15, paddingLeft: 15, fontWeight: '800', fontSize: 18 }}>United States trends</Text>

      <FlatList data={combinedData} renderItem={renderItem} keyExtractor={(item) => item.id} />

      <Link href="/new-tweet" asChild>
        <Entypo name="plus" size={24} color="white" style={styles.floatingButton} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },

  floatingButton: {
    backgroundColor: '#1C9BF0',

    borderRadius: 25,
    padding: 15,

    position: 'absolute',
    right: 15,
    bottom: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    overflow: 'hidden',
  },
});
