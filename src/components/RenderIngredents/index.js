import React from 'react'
import { View, FlatList, Text} from 'react-native'

import IngredientsBlock from '../IngredientsBlock'

const RenderIngredents = ({data}) =>{
  return(
    <View>
        <FlatList
            // style={{marginBottom: 200}}
            data={data}
            renderItem={({item})=>{
                console.log()
                return(
                    <IngredientsBlock 
                        image={item.image}
                        food={item.food}
                        quantity={item.quantity + ' ' + item.measure}
                    />
                 
                )
            }}
            nestedScrollEnabled
        />
     </View>
  )
}

export default RenderIngredents