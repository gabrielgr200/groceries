import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeIcon from '../../components/HomeIcon/HomeIcon'
import Search from '../../components/Search/Search'
import Banner from '../../components/Banner/Banner'
import ProductsTitle from '../../components/ProdutsTitle/ProdutsTitle'
import ProductsCard from '../../components/ProductsCard/ProductsCard'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <View>
          <HomeIcon />
          <Search />
          <Banner />
          <ProductsTitle title='Exclusive Offer' />
          <ProductsCard />
          <ProductsTitle title='Best Selling' />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10
  },
  scroll: {
    flex: 1
  }
});