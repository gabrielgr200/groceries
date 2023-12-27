import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../assets/banner.png')}/>
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 16
    },
    img: {
        borderRadius: 10,
        height: responsiveHeight(15),
        width: responsiveWidth(90)
    }
});