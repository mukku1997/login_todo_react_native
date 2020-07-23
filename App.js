import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import Dashboard from "./Dashboard";
import Todo from "./src/component/Todo";
import Login from './src/component/Login';

const Stack =  createStackNavigator()

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Todo" component={Todo} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;