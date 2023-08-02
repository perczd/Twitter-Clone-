import { View, Text, StyleSheet } from 'react-native';
import { SearchType } from '../types';
import { Entypo } from '@expo/vector-icons';
import React from 'react';


type SearchProps = {
  topic: SearchType;
};

const Topic = ({ topic }: SearchProps) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
  return (
    <View>
          <View style={{ paddingLeft:15 }}>
           <View style={{flexDirection: 'row'}}>
            <Text style={styles.name1}>{topic.headerTopic}</Text> 
            <Entypo
              name="dots-three-horizontal"
              size={15}
              color="#a6bfbb"
              style={{ marginLeft: 'auto' , paddingRight: 8}}
            />
            </View>
            <Text style={styles.mainContainer1}>{topic.mainTopic}</Text>
            <View style={styles.footer1}>
            <Text style={{color: '#3d5c5c'}}>{topic.footerTopicMain}</Text>
            <Text>{topic.footerTopic}</Text>
            </View>
            </View>
          
 
    
    
     
    

          

          
    </View>
      
    
  );
};

const styles = StyleSheet.create({
  mainContainer1: {
    fontWeight: '700', 
    letterSpacing: 0.5, 
    fontSize: 15,  
    paddingBottom: 3,
    paddingRight: 8,
    flexDirection: 'row'

  },
  name1: {
    fontWeight: '700',
    color: '#3d5c5c',
    fontSize: 13,
    paddingTop: 20, 
    paddingBottom: 3,
  },
  footer1: {
    flexDirection: 'row',
  },
 
});

export default Topic;