import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import profile from './src/screens/profile';
import splash from './src/screens/splash';
import {store} from './src/redux/store';
import {Provider} from 'react-redux'


const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
       // initialRouteName="Splash"
          screenOptions={{
            headerShown: false
          
          }}
        >
          <Stack.Screen name="Splash" component={splash} />
          <Stack.Screen name="Profile" component={profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;