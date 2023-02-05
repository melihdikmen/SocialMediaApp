import {View} from 'react-native';

const HomePageBackground = () => {
  return (
    <View>
      <View
        style={{
          width: 680,
          height: 469,
          position: 'absolute',
          backgroundColor: '#E1F6F4',
          borderRadius: 152,
          left: -532,
          top: 47,
          transform: [{rotate: '-45deg'}],
        }}
      />
      <View
        style={{
          width: 504,
          height: 565,
          position: 'absolute',
          backgroundColor: 'transparent',
          borderRadius: 152,
          left: -443,
          top: -16,
          transform: [{rotate: '-45deg'}],
          borderWidth: 1,
          borderColor: 'white',
        }}
      />
      <View
        style={{
          width: 453,
          height: 537,
          position: 'absolute',
          backgroundColor: 'transparent',
          borderRadius: 152,
          left: -447,
          top: 19,
          transform: [{rotate: '-45deg'}],
          borderWidth: 1,
          borderColor: 'white',
        }}
      />
    </View>
  );
};

export default HomePageBackground
