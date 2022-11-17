import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./Screens/Login";
import Welcome from './Screens/Welcome';

const Stack = createNativeStackNavigator();

export default function App() {
  return ( <NavigationContainer>
    
     <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Welcome" component={Welcome}/>
            <Stack.Screen name="Login" component={Login}/>
            
        </Stack.Navigator>
  </NavigationContainer>
  );
}
