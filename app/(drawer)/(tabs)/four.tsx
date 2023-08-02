import { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { View, 
    StyleSheet, 
    Text,  
    Pressable,
    } from 'react-native';
    import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function NewTweet () {

      return (
        
        <View style={styles.container}>
          <Text style={{
            fontSize:35,
            fontWeight: '700',
            paddingBottom: 10
          }}>
            Welcome to your inbox!</Text>
            <Text style={{
              color: 'gray',
              lineHeight: 16,
              fontSize: 16,
              fontWeight: '400',
              paddingBottom: 20
            }}>
              Drop a line, share Tweets 
              and more with private conversations 
              between you and others on Twitter.</Text>
            <View style={styles.buttonContainer}>
            <Link href="/tweetMessage" asChild  >
            <Pressable  style={styles.button}>
               <Text style={styles.buttonText}> Write a message </Text>
            </Pressable>
            </Link>
            </View>
            <Link href="/tweetMessage" asChild  >
          <MaterialCommunityIcons
           name="email-plus-outline" 
            size={24} 
            color="white"
            style={styles.floatingButton}/>
          </Link>
          
        </View>
        
       
    );
}

const styles = StyleSheet.create({
   container: {
    padding: 30,
    flex: 1,
    backgroundColor: 'white',
    paddingRight: 12,
   },
   buttonContainer: {
    flexDirection: 'row',
    marginVertical:10,
    justifyContent: 'space-between',
    alignItems: 'center',
   },
   button: {
    backgroundColor: '#1C9BF0',
    padding: 16,
    paddingHorizontal: 22,
    borderRadius: 50,
   },
   buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 17,
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