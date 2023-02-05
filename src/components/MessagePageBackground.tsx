import {View} from 'react-native';

const MessagePageBackground = () => (
  <View>
    <View
      style={{
        width: 649,
        height: 575,
        position: 'absolute',
        backgroundColor: '#E1F6F4',
        borderRadius: 152,
        left: -165,
        top: 337,
        transform: [{rotate: '-45deg'}],
      }}
    />
    <View
      style={{
        width: 473,
        height: 465,
        position: 'absolute',
        backgroundColor: 'transparent',
        borderRadius: 152,
        left: -54,
        top: 243,
        transform: [{rotate: '-45deg'}],
        borderWidth: 1,
        borderColor: '#EEF2E2',
      }}
    />
    <View
      style={{
        width: 473,
        height: 465,
        position: 'absolute',
        backgroundColor: 'transparent',
        borderRadius: 152,
        left: -54,
        top: 184,
        transform: [{rotate: '-45deg'}],
        borderWidth: 1,
        borderColor: '#EEF2E2',
      }}
    />
  </View>
);


export default MessagePageBackground