import { StyleSheet, Image, Text, View, Pressable,  } from 'react-native';
import { TweetType } from '../types';
import { Entypo, Ionicons, EvilIcons } from '@expo/vector-icons';
import IconButton from './IconButton';
import { Link } from 'expo-router';
import { Video, ResizeMode } from 'expo-av';
import React from 'react';

type TweetProps = {
     tweet: TweetType;
};

const Tweet = ({tweet}: TweetProps) => {

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
    
    return (
      <Link href={`/feed/tweet/${tweet.id}`} asChild>
   <Pressable style={styles.container}>
      <Image src={tweet.user.image} style={styles.userImage} />
      <View style={styles.mainContainer}>
      <View style={{ flexDirection: 'row' }}>
      <Text style={styles.name}>{tweet.user.name}</Text>
      <Text style={styles.username}>@{tweet.user.username} · 3h</Text>
      <Entypo 
      name="dots-three-horizontal" 
      size={15} 
      color="#a6bfbb"
      style={{ marginLeft: 'auto' }}
      />
      </View>
      <Text style={styles.content}>{tweet.content}</Text>
      {tweet.image && <Image src={tweet.image} style={styles.image} /> }
      {tweet.video && <Video
        ref={video}
        style={styles.video}
        src={tweet.video}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />}
      
      <View style={styles.footer}>
        <IconButton icon='ios-stats-chart' text={tweet.impressions} />
        <IconButton icon='ios-chatbubble-outline' text={tweet.numberOfComments} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
         <EvilIcons name="retweet"  size={25} color="gray" />
         <Text style={{ fontSize:13, color: 'gray'}}>{tweet.numberOfRetweets}</Text>
        </View>
        <IconButton icon='heart-outline' text={tweet.numberOfLikes} />
        <IconButton icon='md-share-outline'  />

      </View>  
      </View>   
    </Pressable>
    </Link>
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: 0.2,
      borderColor:'#b2bdbf',
      backgroundColor: 'white',
      
    },
   userImage: {
    width:50, 
    height: 50, 
    borderRadius: 50
   },
   mainContainer: {
    marginLeft: 6,
    flex:1,
   },
   name: {
    fontWeight: '700'
   },
   username: {
    color: 'gray',
    marginLeft: 5,
   },
   content: {
    lineHeight: 20,
    marginTop: 3,
   },
   image: {
    width: '100%',
    aspectRatio: 16/9,
    marginVertical: 10,
    borderRadius: 15,
   },
   footer: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
   },
   video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
   },
  });

  export default Tweet;