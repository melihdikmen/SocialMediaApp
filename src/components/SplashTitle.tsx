import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
interface SplashTitleProps {
  header: string;
  title: string;
}

const SplashTitle = (props: SplashTitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{props.header}</Text>
      <Text
        style={styles.titleText}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 150,
  },

  headerText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#4E4E4E',
    fontFamily: 'Poppins',
  },

  titleText:{
    fontWeight: '700',
    fontSize: 39,
    lineHeight: 58,
    fontFamily: 'Poppins',
  }
});

export default SplashTitle;
