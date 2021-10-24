import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const NameAndType = ({name, type}) =>{
  return(
   
   
    <View style={styles.nameAndTypeBlock}>
        <View style={styles.nameBlock}>
            <Text style={styles.nameText}>
                {name}
            </Text>
            <Text style={styles.typeText}>
                {type}
            </Text>
        </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    nameAndTypeBlock:{
        height: 100,
        padding: 20,
        flexDirection: 'row'
    },
    nameBlock:{

    },
    nameText:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
    typeText:{
        fontSize: 20,
        color: 'gray',
        marginTop: 5,
        fontWeight: '600'
    },
})

export default NameAndType