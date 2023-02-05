import {Image, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const MessagePageHeader = () => {
  return (
    <View
      style={{
        marginLeft: 25.41,
        marginTop: 52,
        flexDirection: 'row',
        marginRight: 31.7,
      }}>
      <View style={{flex: 1}}>
      <TouchableOpacity>
         <FontAwesome5 size={24}  name="arrow-left" />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <TouchableOpacity>
         <FontAwesome5 size={24}  name="bars" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessagePageHeader
