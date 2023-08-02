import { Link, Tabs, useNavigation } from 'expo-router';
import { Pressable, 
  useColorScheme, 
  Image, 
  View, 
  Text, 
  StyleSheet,} from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
 


const headerImage = require('../../../assets/imagesTwitter/logo.png');

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'feed',
};

function AvatarHeader() {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.openDrawer()}>
      <Image
        src="https://i.pinimg.com/originals/95/23/45/952345224ddd0c762a6b23baed8f1942.jpg"
        style={{ width: 35, aspectRatio: 1, borderRadius: 40, marginLeft: 15 }}
      />
    </Pressable>
  )
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="feed"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <
          Ionicons name="ios-home-outline" 
            size={24} 
            color={color} 
            style={{padding: 8}} 
            />,
            headerTitle: () => (
              <
                Image source={headerImage} 
                style={{ width: 100, height: 35 }} 
                resizeMode="contain" />
            ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <MaterialCommunityIcons 
                  name="star-four-points-outline" 
                  size={24} 
                  color="black"
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
              ),
            headerLeft: () => <AvatarHeader />
        }}
      />
     
     <Tabs.Screen
        name="two"
        options={{
          title: '',
            tabBarIcon: ({ color }) => <
              Ionicons 
            name="md-search-outline" 
            size={24} 
            color={color}
            style={{padding: 8}} 
            />,
            headerTitle: () => (
              <View style={styles.buttonContainer}>
              
            <Link href="/searchBox" asChild  >
            <Pressable  style={styles.button} >
       
            <Text style={styles.buttonText}>Search Twitter</Text>
            
            </Pressable>
            </Link>
            </View>
             ), 
           
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                 <Ionicons 
                 name="settings-outline" 
                 size={24} color="black"
                   style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                 />
                )}
              </Pressable>
            </Link>
          ),
          headerLeft: () => <AvatarHeader />
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Ionicons 
          name="ios-notifications-outline" 
          size={24} 
          color={color}
          style={{padding: 8}} 
          />,
          headerTitle: () => (
            <Text style={{fontSize:17,fontWeight:'800'}}>Notifications</Text> 
           ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons 
                  name="settings-outline" 
                  size={24} color="black"
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerLeft: () => <AvatarHeader />
        }}
      />
       <Tabs.Screen
        name="four"
        options={{
          title: '',
          tabBarIcon: ({ color },) => <Ionicons 
          name="md-mail-outline" 
          size={24} 
          color={color}
          style={{padding: 8}} 
           />,
           headerTitle: () => (
            <Text style={{fontSize:17,fontWeight:'800'}}>Messages</Text> 
           ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons 
                  name="settings-outline" 
                  size={24} color="black"
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerLeft: () => <AvatarHeader />
        }}
      />
      </Tabs>
  );
}

const styles= StyleSheet.create({
 
   buttonContainer: {
    flexDirection: 'row',
    
   },
   button: {
    backgroundColor: '#f0f5f5',
    paddingVertical: 9,
    paddingHorizontal: 50,
    borderRadius: 50,
   },
   buttonText: {
    color: '#334d4d',
    fontWeight: '400',
    fontSize: 18,
  
   },
});


