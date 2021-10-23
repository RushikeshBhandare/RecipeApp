import React from 'react'
import { View, Text, FlatList} from 'react-native'

import FoodBlock from '../FoodBox'

const ListOfRecipes = ({recipeData}) =>{
  return(
    <View style={{
        alignItems: 'center',
    }}>
        <FlatList
            data={recipeData}
            renderItem={({item})=>{
                return(
                    <FoodBlock
                        image={item.recipe.image}
                        name={item.recipe.label}
                        time={Math.floor(item.recipe.calories)}
                    />
                )
            }}
            numColumns='2'
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default ListOfRecipes