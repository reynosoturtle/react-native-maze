import React from 'react'
import { TouchableOpacity, ImageBackground, View, StyleSheet, Text } from 'react-native'

export default Controls = (props) => {
    const handleClick = (direction) => {
        console.log(direction)
    }

    return (
        <View style={styles.container}>

            <ImageBackground style={styles.image} source={require('../static/images/controls.png')}>
                <View style={styles.buttonsContainer}>

                    <View style={styles.topButtons}>
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => handleClick('up')} />
                    </View>

                    <View style={styles.midButtons}>
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => handleClick('left')} />
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => handleClick('right')} />
                    </View>

                    <View style={styles.botButtons}>
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => handleClick('down')} />
                    </View>

                </View>
            </ImageBackground>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        // borderWidth: 2,
        // borderColor: 'blue',
        height: '50%',
        width: '50%',
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
    },

    image: {
        height: '100%',
        width: '100%',
        aspectRatio: 1,
        resizeMode: 'stretch',
    },

    buttonsContainer: {
        flex: 1,
        justifyContent: 'space-around'
    },

    buttonStyle: {
        // borderWidth: 2,
        // borderColor: 'red',
        width: 50,
        height: 50,
    },

    topButtons: {
        flex: 1,
        justifyContent: 'flex-end',
        alignSelf: 'center'
    },
    midButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    botButtons: {
        flex: 1,
        justifyContent: 'flex-start',
        alignSelf: 'center'
    },
})