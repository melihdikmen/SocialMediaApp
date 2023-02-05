import {Image, Text, Touchable, TouchableOpacity, View} from 'react-native';

interface MessagesItemProps {
    name :string
    message :string,
    profileImage : string
}

const MessagesItem = (props:MessagesItemProps) => (
  <TouchableOpacity
    style={{
      height: 103,
      width: 328,
      borderRadius: 33,
      marginLeft: 33,
      backgroundColor: 'rgba(255,255,255,0.6)',
      marginTop: 16,
      flexDirection: 'row',
    }}>
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
      }}>
      <Image
        style={{
          width: 62,
          height: 62,
          borderRadius: 30,
          borderWidth: 1,
        }}
        source={{uri: props.profileImage}}
      />
    </View>
    <View style={{flex: 3, marginTop: 15.89, marginLeft: 12}}>
      <View>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontWeight: '400',
            fontSize: 12.8,
            lineHeight: 19,
          }}>
        {props.name}
        </Text>
      </View>
      <View style={{marginTop: 9, width: 187, height: 50}}>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontWeight: '400',
            fontSize: 12.8,
            lineHeight: 19,
            maxWidth: 187,
            color: '#656565',
          }}>
        {props.message}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default MessagesItem
