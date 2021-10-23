import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'


const AppHeader = () =>{
  return(
        <View style={styles.rootContainer}>
            <View style={styles.hamburgureMunueBlock}>
                <Image
                style={styles.menuImage}
                  source={require('./images/menu.png')}
                />
            </View>

            <View style={styles.logoBlock}>
                <Text style={styles.logoText}>Recipe</Text>
            </View>

            <View style={styles.profiiBlock}>

            </View>
        </View>
  )
}

const styles= StyleSheet.create({
  rootContainer:{
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  hamburgureMunueBlock:{
    paddingLeft: 20
  },
  menuImage:{
    width: 40,
    height: 40
  },
  logoBlock:{
      flex: 1,
      alignItems: 'center'
  },
  logoText:{
      fontSize: 30,
      fontWeight: '700',
      color: 'black'
  },

  profiiBlock:{
      width: 40,
      height: 40,
      // borderWidth: 1,
      // borderRadius: 50
  },
})
export default AppHeader