import React from 'react'
import { Button, Image, View, StyleSheet } from 'react-native'

export default Controls = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../static/images/controls.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '50%',
        width: '50%',
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
    },

    image: {
        borderWidth: 2,
        borderColor: 'black',
        // position: 'absolute',
        height: '100%',
        width: '100%',
        aspectRatio: 1,
        resizeMode: 'stretch',
    },

    hiddenButton: {

    }
})