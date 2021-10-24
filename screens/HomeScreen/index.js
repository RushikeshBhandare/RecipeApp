import React, { useEffect, useState } from 'react'
import { View, ScrollView, Text, StyleSheet, Keyboard} from 'react-native'
import Axios from 'axios'

import ListOfRecipes from '../../src/components/ListOfRecipes'
import SearchBar from '../../src/components/SearchBar'
import AppHeader from '../../src/components/AppHeader'


const HomeScreen = () =>{
  
    // state
    const [search, setSearch] = useState('chicken')
    const [searchedValue, setSearchedValue] = useState('chicken')
    const [recipes, setResipes] = useState();

      // const Values for api keys
      const applicationID = "81964ede"
      const applicationKey = "d072e5f52780d3720fec40ba5bd6f17a"
      const url =  `https://api.edamam.com/search?q=${search}&app_id=${applicationID}&app_key=${applicationKey} `
      
    const getRecords = async( ) =>{
        try{
            if(search != ''){
                const res = await Axios.get(url)
                setResipes(res.data.hits)

                console.log('###########################################################')
                console.log(res.data.hits[0].recipe.ingredients)
                console.log('###########################################################')

                setSearchedValue(search)
                setSearch('')
                Keyboard.dismiss()
            }else{
                return;
            }
        }catch(error){
            console.log(error)
            return 
        }
    }

    useEffect(()=>{
        getRecords()
        setSearch('')
    },[])


    return(
        <View style={{
            backgroundColor: 'white'
        }}>
            <AppHeader/>
            <SearchBar search={search} setSearch={setSearch} onPress={getRecords}/>
            <Text style={{
                marginLeft: 20
            }}>
                showing result for : {searchedValue}
            </Text>
            <ListOfRecipes recipeData={recipes}/>
            
        </View>
        

  )
}

export default HomeScreen