import React, { useEffect, useState } from 'react'
import { View, FlatList, Text} from 'react-native'

import NutritionCapsule from '../NutritionCapsule'
const RenderNutrition = ({data}) =>{
    const [newData, setNewData] = useState([])
    useEffect(()=>{
        setNewData(Object.values(data))

    }, [])
  return(
    <View>
          <FlatList
                data={newData}
                renderItem={({item})=>{
                    return(
                            <NutritionCapsule 
                                  type={item.label} 
                                  count={Math.floor(item.total)} 
                                  meter={item.unit}
                            /> 
                        )
                }}
                horizontal
                showsHorizontalScrollIndicator ={false}
        />
     </View>
  )
}

export default RenderNutrition