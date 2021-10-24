import React, { useEffect, useState } from 'react'
import {Share, View,SafeAreaView , Text, Image,StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, FlatList} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import NameAndType from '../../src/components/NameAndType'
import RenderIngredents from '../../src/components/RenderIngredents'
import RenderNutrition from '../../src/components/RenderNutrition'

const DetailScreen = (props) =>{
    const [data, setData] = useState()
    useEffect(()=>{
        setData(props.route.params.data)
    }, [])
    // console.log('####################################################')
    // console.log(data.recipe.digest)
    const navigation = useNavigation()

    // share link to others
    const ShareLink = async( ) =>{
        try{
            const result = await Share.share({
                message: data.recipe.shareAs
            })
        }catch(error){
            console.log('Sharing Link Error', error)
        }
    }

    if(!data){
        return(
            <ActivityIndicator>

            </ActivityIndicator>
        )
    }else{

        return(
        <SafeAreaView  style={styles.rootContainer}>
            <View style={styles.imageBlock}>
                {/* main image */}
                <Image
                        style={styles.mainImage}
                        source={{uri: data.recipe.image}}
                />
                {/* BAck button  */}
                <TouchableOpacity 
                        style={styles.backButton}
                        onPress={()=>{
                            navigation.navigate('Home')
                        }}
                    >
                        <Image 
                            style={{
                                width: 50,
                                height: 50
                            }}
                            source={require("./images/back.png")}
                        />
                </TouchableOpacity>
                {/* Open In the website  */}
                <TouchableOpacity 
                        style={styles.shareButton}
                        onPress={()=>{
                            ShareLink()
                        }}
                    >
                        <Image 
                            style={{
                                width: 30,
                                height: 30
                            }}
                            source={require("./images/share.png")}
                        />
                        <Text style={{fontWeight: 'bold'}}>Share</Text>
                </TouchableOpacity>
            </View>

            {/* information  */}
            <ScrollView 
                showsVerticalScrollIndicator={false}
                style={styles.detailBlock}
            >
                {/* name of the food and type  */}
                <NameAndType name={data.recipe.label} type={data.recipe.dishType[0]}/>

                {/* nutrition facts */}
                <View style={styles.nutricianFactBlock}>
                    <Text style={styles.nutritionTitel}>NUTRITION FACTS - {Math.floor(data.recipe.calories)}KCal </Text>
                    {/* <Text style={styles.nutritionTitel}>{Math.floor(data.recipe.totalWeight)}</Text> */}

                    <View style={styles.NutitionType}>   
                        {/* rendering the Butrition cpsules */}
                        <RenderNutrition data={data.recipe.digest}/>
                    </View>

                </View>
                {/* ingredients */}
                <View style={styles.ingredientsContainer}>
                        <Text style={styles.ingredientsTitle}>
                            INGREDIENTS
                        </Text>
                        <RenderIngredents data={data.recipe.ingredients}/>
                </View>

        
            </ScrollView>
        
        </SafeAreaView >
        )      
    }
  
}

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        overflow: 'hidden'

    },
    backButton:{
        position: 'absolute',
        left: 20,
        top: 20,
        width: 50,
        borderRadius: 50,
        height: 50,
        backgroundColor: 'white',
        elevation: 50,
        alignItems:'center',
        justifyContent:'center'
    },
    shareButton:{
        position: 'absolute',
        right: 10,
        bottom: 30,
        width: 50,
        borderRadius: 50,
        height: 50,
        backgroundColor: '#fcc203',
        elevation: 50,
        alignItems:'center',
        justifyContent:'center',
    },
    imageBlock:{
        width: '100%',
        height: 200,
        borderWidth: 1,
        position: 'relative'
    },
    mainImage:{
        width: '100%',
        height: 200
    },

    detailBlock:{
        // position: 'absolute',
        top: -20,
        backgroundColor: 'white',
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
       overflow: 'hidden'
    },


    // nutrition facts
    nutricianFactBlock:{
        marginTop: 10
    },
    nutritionTitel:{
        marginTop: 5,
        paddingLeft: 20,
        fontSize: 14,
    },
    nutritionTypeBlock:{
        flexDirection: 'row'
    },
    NutitionType:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },

    // ingredents
    ingredientsContainer:{
        marginTop: 10,
        
    },
    ingredientsTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
        marginLeft: 20
    }

})

export default DetailScreen