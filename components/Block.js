import React, { useState } from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default Block = (props) => {
    let images = props.object.images.map((image, index) => {
        return (
            <Image key={index} style={styles.image} source={image} />
        )
    })

    return (
        <View style={styles.block}>
            {images}
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },

    image: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        aspectRatio: 1,
        resizeMode: 'stretch',
    }
})