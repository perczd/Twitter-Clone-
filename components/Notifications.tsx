import { StyleSheet, Image, Text, View, Pressable,  } from 'react-native';
import { NotificationType } from '../types';
import { Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';

type NotificationProps = {
     notification: NotificationType;
};

const Notification = ({notification}: NotificationProps) => {

  
    return (
      <Link href={`/feed/tweet/${notification.id}`} asChild>
   <Pressable style={styles.container}>
      <View style={styles.mainContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center'}}>
      <MaterialCommunityIcons name="star-four-points" size={24} color="#7a00cc" />
      <Image src={notification.image} style={styles.userImage} />
      <Ionicons
      name="ios-close" 
      size={15} 
      color="#a6bfbb"
      style={{ marginLeft: 'auto' }}
      />
      </View>
      <Text style={styles.content}>{notification.content}</Text>
      
     
      </View>   
    </Pressable>
    </Link>
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      padding: 15,
      borderBottomWidth: 0.2,
      borderColor:'#b2bdbf',
      backgroundColor: 'white',
      marginLeft: 10
      
    },
   userImage: {
    width:35, 
    height: 35, 
    borderRadius: 50,
    marginLeft: 7
   },
   userImage1: {
    width:35, 
    height: 35, 
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
    
   },
   image: {
    width: '100%',
    aspectRatio: 16/9,
    marginVertical: 10,
    borderRadius: 15,
   },
  });

  export default Notification;