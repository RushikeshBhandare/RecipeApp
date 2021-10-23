import React from 'react'
import { View, Text} from 'react-native'
import HomeScreen from './screens/HomeScreen'
import FoodBlock from './src/components/FoodBox'

const App = () =>{
  return(
    <View style={{
      flex: 1
    }}>

      <HomeScreen/>
    </View>
  )
}

export default App