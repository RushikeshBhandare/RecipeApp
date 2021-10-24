import React from 'react'
import { View, StyleSheet, Text, Image} from 'react-native'


const IngredientsBlock = ({image, food, quantity}) =>{
  return(
    <View style={styles.rootContainer}>
        <Image
            style={styles.image}
            source={{uri:image}}
        />
        <Text style={styles.nameText}>
            {food}
        </Text>
        <Text style={styles.quantityText}>
            {quantity}
        </Text>
    </View>
  )
}


const styles = StyleSheet.create({
    rootContainer:{
        width: '95%',
        // borderWidth: 1,
        height: 100,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#bababa'
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 20,
        marginLeft:10
    },
    nameText:{
        fontSize: 24,
        fontWeight: 'bold',
        flex: 1,
        color:'black',
        marginLeft: 20
    },
    quantityText:{
        fontSize: 18,
        marginRight: 10,
        fontWeight: 'bold'
    }
})

export default IngredientsBlock