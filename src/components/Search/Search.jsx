import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { Feather } from '@expo/vector-icons';

const Search = () => {
    return (
        <View style={styles.search}>
            <Feather name="search" size={24} color="black" />
            <TextInput style={styles.textInput} placeholder='Search Store' />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    search: {
        backgroundColor: '#e3e3e3',
        height: responsiveHeight(6.5),
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        gap: 10,
        marginBottom: 16
    },
    textInput: {
        flex: 1,
    }
});