import { useNavigation } from '@react-navigation/native';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PageIndicator from './components/PageIndicator';
import SplashButton from './components/SplashButton';

import SplashTitle from './components/SplashTitle';
import TabBar from './components/TabBar';
const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.imageBacground}>
      <SplashTitle header="Welcome To" title="Socially" />
      <View style={{alignItems: 'center', marginTop: 57}}>
        <Image source={require('../assets/images/splashLogo.png')} />
      </View>
      <PageIndicator pageCount={3} activePage={1} />
      <SplashButton onPress={()=> navigation.navigate("TabBar")}  buttonText="Next" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBacground: {position: 'relative', flex: 1, backgroundColor: 'white'},
});

export default SplashScreen;
