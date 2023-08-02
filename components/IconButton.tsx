import { Text, View,  } from 'react-native';
import {  Ionicons, EvilIcons } from '@expo/vector-icons';


type IconButtonProps = {
    icon: React.ComponentProps<typeof Ionicons>['name'];
    text?: string | number;
};

const IconButton = ({icon, text}: IconButtonProps) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name={icon} size={17} color="gray" />
        <Text style={{ fontSize:13, color: 'gray'}}>{text}</Text>
       </View>
    );
};
export default IconButton;