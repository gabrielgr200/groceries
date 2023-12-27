import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

const HomeIcon = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../assets/icon.png')}/>
    </View>
  )
}

export default HomeIcon

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10
    },
    img: {
        width: 40,
        height: 45
    }
})