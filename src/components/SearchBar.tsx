import React from 'react';
import {FlatList, TextInput, View} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const SearchBar = () => (
  <View
    style={{
      width: 288,
      height: 48,
      borderRadius: 15,
      marginTop: 29,
      marginLeft: 40,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: {width: 0, height: 4},
      backgroundColor: 'white',
      shadowOpacity: 1,
      flexDirection: 'row',
      alignItems:"center"
    }}>
    <View style={{marginLeft:20}} >
      <FontAwesome5Icon size={18} name="search" />
    </View>
    <View style={{marginLeft:18}} >
     <TextInput placeholder='Search for contact'  />
    </View>
  </View>
);

export default SearchBar;
