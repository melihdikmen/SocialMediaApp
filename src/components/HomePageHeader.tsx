import {Image, Text, TouchableOpacity, View} from 'react-native';

const HomePageHeader = () => {
  return (
    <View
      style={{
        marginLeft: 25.41,
        marginTop: 52,
        flexDirection: 'row',
        marginRight: 31.7,
      }}>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontSize: 16,
            fontWeight: '700',
            lineHeight: 24,
          }}>
          Socially
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <TouchableOpacity>
          <Image source={require('../../assets/icons/bell.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePageHeader
