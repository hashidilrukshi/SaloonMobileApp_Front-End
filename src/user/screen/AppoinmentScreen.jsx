import React from 'react';
import {WebView} from 'react-native-webview';
import {StyleSheet, View} from 'react-native';

const Appointment = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: 'https://calendly.com/ghashinika2002/appointment?primary_color=ff00e0',
        }}
        style={{flex: 1}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Appointment;
