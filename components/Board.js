import React, { useState } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native';
import Block from './Block'
import BoardManager from '../model/BoardManager'

export default Board = (props) => {
    let rows = props.board.map((row, rowIndex) => {
        let columns = row.map((column, colIndex) => {
            return (
                <View key={colIndex} style={styles.column}>
                    <Block object={column} />
                </View>
            )
        })

        return (
            <View key={rowIndex} style={styles.row}>
                {columns}
            </View>
        )
    })

    return (
        <View style={styles.container}>
            {rows}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        aspectRatio: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },


    row: {
        flex: 1,
    },

    column: {
        flex: 1,
    }
})