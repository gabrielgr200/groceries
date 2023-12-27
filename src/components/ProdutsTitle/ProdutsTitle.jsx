import { StyleSheet, Text, View } from 'react-native'
import { myColors } from '../../utils/myColors';
import React from 'react'

const ProductsTitle = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>See all</Text>
    </View>
  )
}

export default ProductsTitle

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    subtitle: {
        color: myColors.primary,
        fontWeight: 'bold',
        fontSize: 16
    }
});