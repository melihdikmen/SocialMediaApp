import {GestureResponderEvent, StyleSheet} from 'react-native';
import {View, TouchableOpacity, Image, Text} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface SplashButtonProps {
  buttonText: string;
  onPress : any
}

const SplashButton = (props: SplashButtonProps) => {
  return (
    <TouchableOpacity 
    onPress={props.onPress}
    style={styles.container}>
      <View style={styles.imageView}>
        <Image source={require('../../assets/images/buttonBg.png')} />
      </View>
      <View style={styles.buttonView}>
        <Text style={styles.buttonText}>{props.buttonText}</Text>
        <FontAwesome5
          size={16}
          color={'white'}
          style={{marginTop: 8, marginLeft: 10}}
          name={'arrow-right'}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },

  imageView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },

  buttonView: {
    position: 'absolute',
    bottom: 80,
    right: 60,
    flexDirection: 'row',
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 30,
    fontFamily: 'Poppins',
  },
});

export default SplashButton;
