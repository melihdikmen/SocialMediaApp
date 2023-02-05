import {Text, View} from 'react-native';

interface PageTitleProps {
    title: string
}

const PageTitle = (props:PageTitleProps) => {
  return (
    <View style={{marginTop: 47, marginLeft: 24}}>
      <Text
        style={{
          fontFamily: 'Poppins',
          fontWeight: '700',
          fontSize: 25,
          lineHeight: 38,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default PageTitle
