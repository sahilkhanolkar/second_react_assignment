import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Login = ({navigation}) => {
    const [value, onChangeValue] = React.useState("");

    return<View style={styles.container}>
      <Text>Hey, Please Enter your username!</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        onChangeText={newText => onChangeValue(newText)}
        value={value}
        placeholder="Username"
      />
      <Button style={styles.button}
      title='Login'
      onPress={()=>navigation.navigate('Welcome',  {username:'hyhyg'})}>   
        </Button>
        </View>
    
}

export default Login;

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