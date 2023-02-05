import {Component, ReactElement} from 'react';
import {StyleSheet, View} from 'react-native';

interface PageIndicatorProps {
  pageCount: number;
  activePage: number;
}

const PageIndicator = (props: PageIndicatorProps) => {
  let content: ReactElement[] = [];
  for (let index = 0; index < props.pageCount; index++) {
    content!.push(
      <View
        key={index}
        style={[
          styles.itemContainer,
          {backgroundColor: props.activePage == index + 1 ? 'black' : 'white'},
        ]}
      />,
    );
  }

  return <View style={styles.container}>{content}</View>;
};

const styles = StyleSheet.create({
  container: {justifyContent: 'center', marginTop: 70, flexDirection: 'row'},
  itemContainer: {
    width: 11.33,
    height: 11.33,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 8,
  },
});

export default PageIndicator;
