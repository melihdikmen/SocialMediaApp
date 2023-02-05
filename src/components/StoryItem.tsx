import {ImageSourcePropType, StyleSheet} from 'react-native';
import {Image, TouchableOpacity} from 'react-native';

interface StoryItemProps {
  path: ImageSourcePropType;
}

const StoryItem = (props: StoryItemProps) => {
  return (
    <TouchableOpacity>
      <Image style={styles.image} source={props.path} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 56,
    height: 56,
    borderRadius: 56,
    marginLeft: 30,
    borderWidth: 2,
    borderColor: '#25A0B0',
  },
});

export default StoryItem;
