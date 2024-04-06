import React from 'react';
import {View, StyleSheet} from 'react-native';

const MainLayout = ({children, header, footer}) => {
  return (
    <View style={styles.container}>
      {header && <View style={styles.header}>{header}</View>}
      <View style={styles.content}>{children}</View>
      {footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#ccc',
    padding: 10,
  },
  content: {
    flex: 1,
  },
  footer: {
    backgroundColor: '#ccc',
    padding: 10,
  },
});

export default MainLayout;
