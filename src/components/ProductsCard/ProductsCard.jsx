import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import { fruits } from '../../utils/Date';
import { myColors } from '../../utils/myColors';
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { AntDesign } from '@expo/vector-icons';

const ProductsCard = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={fruits}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={styles.card}>

                        <Image style={styles.img} source={{ uri: item.img }} />
                        <View style={styles.text}>
                            <Text style={styles.title}>{item.name}</Text>
                            <Text style={styles.pieces}>{item.pieces}, Priceg</Text>
                            <View style={styles.prices}>
                                <Text style={styles.price}>R$ {item.price}</Text>
                                <AntDesign name="plussquare" size={30} color={myColors.primary} />
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default ProductsCard

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    },
    card: {
        height: responsiveHeight(28),
        borderColor: '#ccc',
        borderWidth: 2,
        width: responsiveWidth(45),
        marginRight: 10,
        borderRadius: 20,
        marginBottom: 30
    },
    img: {
        height: 120,
        resizeMode: 'contain'
    },
    text: {
        paddingHorizontal: 10,
        gap: 3
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    pieces: {
        color: '#888'
    },
    prices: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    price: {
        fontSize: 18,
        fontWeight: '600'
    }
});