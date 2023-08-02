import { StyleSheet, View, FlatList, Pressable } from 'react-native';
import notifications from '../../../assets/data/notifications';
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';
import Notification from '../../../components/Notifications';

export default function NotificationScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={notifications}
        renderItem={({ item }) => <Notification notification={item} />}
      />

      <Link href="/new-tweet" asChild>
        <Entypo
          name="plus"
          size={24}
          color="white"
          style={styles.floatingButton}
        />
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