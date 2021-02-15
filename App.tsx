import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Api from './Api'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title={'Press me'} onPress={()=>{Api.Pet.getPetById(10).catch((e)=>console.log(e))}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
