import React from 'react'
import { View, StyleSheet,Text, Image} from 'react-native'


const FoodBlock = ({image, time, name}) =>{
  return(
      <View style={styles.rootContainer}>
          {/* image of the Food */}
          <View style={styles.imageBlock}>
            <Image 
                style={styles.image}
                source={{uri:image}}  
            />
          </View>
          {/* Time And Name  */}
          <View style={styles.infoBlock}>
            {/* Name  */}
            <View style={styles.nameBlock}>
                <Text style={styles.nameText}>{name}</Text>
            </View>

            {/* time required */}
            <View style={styles.timeBlock}>
                <Text style={styles.timeText}>{time} Cal</Text>
            </View>
           

          </View>
      </View>
  )
}

const  styles= StyleSheet.create({
    rootContainer:{
        width: 150,
        height: 270,
        // borderWidth: 1,
        margin: 20,
       
    },
    imageBlock:{
        height:180,
        borderRadius: 10,
        overflow: "hidden",
        elevation: 11

    },
    image:{
        width:150,
        height: 180
    },

    infoBlock:{
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },

    timeBlock:{
        width: 100,
        height: 40,
        backgroundColor: '#fcc203',
        borderRadius: 20,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    timeText:{
        fontWeight: 'bold',
        color: 'black'
    },

    nameBlock:{
        overflow: 'hidden',
        width: 140,
        height: 20
    },
    nameText:{
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
        overflow: 'hidden',
        textAlign: 'center'
    }
})

export default FoodBlock