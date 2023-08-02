import { withLayoutContext } from 'expo-router';
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { ActivityIndicator, Text, View, Image } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const DrawerNavigator = createDrawerNavigator().Navigator;

const Drawer = withLayoutContext(DrawerNavigator);


export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{marginLeft: 20}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        src="https://i.pinimg.com/originals/95/23/45/952345224ddd0c762a6b23baed8f1942.jpg"
        style={{ width: 40, aspectRatio: 1, borderRadius: 40, marginLeft: 10 }}
      />
     <View style={{marginLeft: 170}}> 
      <FontAwesome5 name="user-circle" size={24} color="black"  /> 
      </View>
     </View>
      <Text style={{ fontSize: 18, fontWeight: '700', paddingBottom: 1, paddingTop: 10 }}>Travis Bennett</Text>
      <Text style={{ fontSize: 16, color: '#778899', fontWeight: '400' }}>@yungtaco</Text>

      <View style={{flexDirection: 'row', paddingTop: 10 }}>
      <Text style={{ fontSize: 15, color: 'black' }}>3</Text> 
      <Text> </Text>
      <Text style={{ fontSize: 15, color: '#778899' }}>Following</Text>
      <Text>   </Text>
      <Text style={{ fontSize: 15, color: 'black' }}>10.5M</Text>
      <Text> </Text>
      <Text style={{ fontSize: 15, color: '#778899' }}>Followers</Text>
      </View>
      </View>
      <DrawerItemList {...props} />
      </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  const { authToken } = useAuth();

  if (!authToken) {
    return<ActivityIndicator />;
  }
  
  return (
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="(tabs)"
        options={{ headerShown: false, drawerLabel: '', drawerActiveTintColor:'white',  }}
      />
        <Drawer.Screen name="twitter-circle" options={{ drawerLabel:'Twitter Blue', drawerActiveTintColor:'#909090'  }} />
      <Drawer.Screen name="bookmarks" options={{ drawerLabel: 'Bookmarks', drawerActiveTintColor:'#909090', }} />
      <Drawer.Screen name="list" options={{ drawerLabel: 'Lists', drawerActiveTintColor:'#909090' }} />
      <Drawer.Screen name="spaces" options={{ drawerLabel: 'Spaces', drawerActiveTintColor:'#909090' }} />
    </Drawer>
  );
}