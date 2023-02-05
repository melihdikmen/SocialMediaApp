import {Image, Text, View} from 'react-native';

interface PostHeaderProps {
    profileImagePath : string,
    name :string,
    time : string
}

const PostHeader = (props:PostHeaderProps) => (
  <View
    style={{
      position: 'absolute',
      left: 13,
      top: 13,
      flexDirection: 'row',
    }}>
    <View>
      <Image
        style={{height: 35, width: 37, borderRadius: 35}}
        source={{
          uri: props.profileImagePath,
        }}
      />
    </View>
    <View style={{marginLeft: 7.16}}>
      <Text
        style={{
          color: 'white',
          fontFamily: 'Poppins',
          fontWeight: '400',
          fontSize: 12.8,
          lineHeight: 19,
        }}>
      {props.name}
      </Text>
      <Text
        style={{
          color: '#D8D8D8',
          fontFamily: 'Poppins',
          fontSize: 12.8,
          fontWeight: '400',
        }}>
        {props.time}
      </Text>
    </View>
  </View>
);


export  default PostHeader