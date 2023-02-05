import {StyleSheet} from 'react-native';
import {Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AddStory = () => {
  return (
    <TouchableOpacity style={styles.shadow}>
      <LinearGradient style={styles.image} colors={['#FFE1E0', '#E1F6F4']}>
        <Image source={require('../../assets/icons/add_icon.png')} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'rgba(245, 200, 198, 0.52)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddStory;
