import {Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface PostButtonProps {
  text: string;
  iconName: string;
}

const PostButton = (props: PostButtonProps) => (
  <TouchableOpacity
    style={{
      backgroundColor: 'rgba(229, 229, 229, 0.4)',
      opacity: 1,
      width: 70.65,
      height: 27.16,
      borderRadius: 35,
      alignItems: 'center',
      flexDirection: 'row',
      marginLeft: 22.15,
    }}>
    <TouchableOpacity style={{marginLeft: 9}}>
      <FontAwesome5 size={18} name={props.iconName} color={'white'} />
    </TouchableOpacity>
    <View style={{marginLeft: 8.48,alignItems:"center"}}>
      <Text style={{color: 'white'}}>{props.text}</Text>
    </View>
  </TouchableOpacity>
);

export default PostButton;
