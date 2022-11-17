import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import React,{useState} from 'react';

export default function App() {
  const [value, onChangeValue] = React.useState("");
  return (
    <View style={styles.container}>
      <Text>Hello Lets Start This Project!</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        onChangeText={onChangeValue}
        value={value}
        placeholder="Username"
      />
      <TouchableHighlight onPress={console.log("clicked")}>
        <View style={styles.button}>
          <Text>Login</Text>
        </View>
        </TouchableHighlight>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});
