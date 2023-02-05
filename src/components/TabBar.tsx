import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {ReactElement, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Icon} from 'react-native-vector-icons/Icon';
import colors from '../constants/colors';
import HomePage from '../HomePage';
import MessagePage from '../MessagePage';
import BottomNavgationItem from './BottomNavgationItem';

const pages: ReactElement[] = [<HomePage />,<MessagePage/>,<View/>,<View/>,<View/>];

const TabBar = () => {
  const [activePage, setActivePage] = useState(0);
  const content = pages[activePage];
  return (
    <View style={{flex: 1}}>
      {content}
      <View style={styles.tabBar}>
        <BottomNavgationItem
        onPress={()=> setActivePage(0)}
          style={ activePage  == 0?  { tintColor: '#7DB9B3' } : {}  }
          iconPath={require('../../assets/icons/home_icon.png')}
        />
        <BottomNavgationItem
           onPress={()=> setActivePage(1)}
          style={  activePage  == 1?   {marginTop: 21,tintColor: '#7DB9B3'} : {marginTop: 21}  }
          iconPath={require('../../assets/icons/message_icon.png')}
        />
        <TouchableOpacity
          style={styles.button}>
          <Image
            source={require('../../assets/icons/plus_icon.png')}
            style={{transform: [{rotate: '45deg'}], width: 20, height: 20}}
          />
        </TouchableOpacity>
        <BottomNavgationItem
          onPress={()=> setActivePage(2)}
          style={  activePage  == 2 ?  {width: 22, height: 22, marginTop: 17,tintColor: '#7DB9B3' } : {width: 22, height: 22, marginTop: 17 }}
          iconPath={require('../../assets/icons/favorite.png')}
        />
        <BottomNavgationItem
          style={ activePage  == 3?  { tintColor: '#7DB9B3' } : {}  }
          onPress={()=> setActivePage(3)}
          iconPath={require('../../assets/icons/profile_icon.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 82,
    flexDirection: 'row',
    backgroundColor: 'white',
    bottom: 0,
    position: 'absolute',
    width: Dimensions.get('screen').width,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button : {
    height: 60,
    width: 60,
    backgroundColor: 'black',
    transform: [{rotate: '45deg'}],
    borderRadius: 23,
    marginTop: -20,
    marginLeft: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }

});

export default TabBar;
