import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from "./components/card";
import Constants from "expo-constants";
export default function App() {
  return (
    <View style={styles.container}>
      <Card
        fullName={'Ahmed Rabea'}
        lineText={'Comments'}
        onPressLinkText={() => { alert('aa') }}
        Image={{ uri: 'https://media2.s-nbcnews.com/i/MSNBC/Components/Video/__NEW/x_lon_trump_151126.jpg/600/600' }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginTop: Constants.statusBarHeight
  },
});
