import {
    GestureResponderEvent,
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
} from 'react-native';
interface BottomNavgationItemProps {
  iconPath: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  onPress : any
}
const BottomNavgationItem = (props: BottomNavgationItemProps) => {
  return (
    <TouchableOpacity 
    onPress={props.onPress}
    >
      <Image
        style={[
          {
            width: 18,
            height: 18,
            marginTop: 19,
            marginBottom: 45,
            marginLeft: 41,
          },
          props.style,
        ]}
        source={props.iconPath}
      />
    </TouchableOpacity>
  );
};

export default BottomNavgationItem;
