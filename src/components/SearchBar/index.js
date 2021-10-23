import React from 'react'
import { View, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native'

const SearchBar = ({search, setSearch, onPress}) =>{

   
  return(
    <View style={styles.rootContainer}>
        <View style={styles.searchBlock}>
            {/* text input */}
            <TextInput
                style={styles.inputText}
                placeholder="Search"
                value={search}
                onChangeText={(v)=>{setSearch(v)}}
            />
            {/* button */}
            <TouchableOpacity
                onPress={()=>{
                    onPress()
                }}
                style={styles.searchButton}
            >
                <Image
                    style={styles.searchImage}
                    source={require('./images/search.png')}
                />
            </TouchableOpacity>
            
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    rootContainer:{
        padding: 10,
        alignItems: 'center'
    },
    searchBlock:{
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: '#d9d9d9',
        borderRadius: 30,
        flexDirection: 'row',
        padding: 2,
        backgroundColor:'white',
        overflow: 'hidden',
        elevation: 20
    },
    inputText:{
        fontSize: 18,
        marginLeft: 10,
        width:'80%',
        flexGrow:1
    },
    searchButton:{
        height: 45,
        width: 45,
        backgroundColor: '#fcc203',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchImage:{
        width: 30,
        height: 30
    }

})

export default SearchBar