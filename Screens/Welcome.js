import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Welcome = ({route}) => {
    return <View style={styles.container}>
        <Text>Username: </Text>
        <Text>Hey, {route.params.username}!</Text>

        </View>
}

export default Welcome;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });