import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import 'react-native-gesture-handler';

import DetailScreen from './screens/DetailScreen'
import HomeScreen from './screens/HomeScreen'
import RenderIngredents from './src/components/RenderIngredents'

const Stack = createStackNavigator()

const App = () =>{
  
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <HomeScreen/>  
    // <DetailScreen/>
    )
}

export default App