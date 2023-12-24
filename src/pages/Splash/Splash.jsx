import { StyleSheet, Image, View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { myColors } from '../../utils/myColors'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn')
    }, 4000);
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.img} source={require('../../assets/icon.png')} />

        <View>
          <Text style={styles.title}>nectar</Text>
          <Text style={styles.subTitle}>online groceriel</Text>
        </View>
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: myColors.primary
  },
  content: {
    gap: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 65,
    height: 75,
    tintColor: 'white'
  },
  title: {
    fontSize: 75,
    fontWeight: 'bold'
  },
  subTitle: {
    top: -15,
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 5
  }
});