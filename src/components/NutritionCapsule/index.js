import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const NutritionCapsule = ({type, count, meter}) =>{
  return(
                 <View style={styles.nutritionTypeBlock}>
                    <View style={styles.capsuleContainer}>
                        {/* number in circle */}
                        <View style={styles.numberContainer}>
                            <Text style={styles.numberText}>
                                {count}
                            </Text>
                        </View>

                        {/* category  */}
                        <View style={styles.categoryBlock}>
                            <Text style={styles.typeText}>
                                {type}
                            </Text>
                            <Text style={styles.meterText}>
                                {meter}
                            </Text>
                        </View>
                    </View>
                </View>
  )
}


const styles = StyleSheet.create({
    // capsule
    capsuleContainer:{
        width: 90,
        // borderWidth: 1,
        height: 150,
        borderRadius: 40,
        backgroundColor: '#fcc203',
        margin: 10
    },
    numberContainer:{
        width: 65,
        height: 65,
        borderRadius: 50,
        // borderWidth: 1,
        margin: 12,
        marginTop:7,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems:'center'
    },
    numberText:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
    categoryBlock:{
        alignItems: 'center',
        marginTop: 5
    },
    typeText:{
        fontSize: 16,
        fontWeight: 'bold',
        // borderWidth: 1,
        width: 80,
        height: 20,
        overflow: 'hidden',
        textAlign:'center'
    },
    meterText:{
        fontWeight: 'bold',
    }

})

export default NutritionCapsule