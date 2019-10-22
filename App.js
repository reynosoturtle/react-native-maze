/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Board from './components/Board'
import Controls from './components/Controls'
import BoardManager from './model/BoardManager'


const App: () => React$Node = () => {

  const [size, setSize] = useState({ x: 15, y: 15 })

  const [boardManager, setBoardManager] = useState(new BoardManager(size.x, size.y))

  const [board, setBoard] = useState(boardManager.board)

  const moveHandler = (direction) => {
    boardManager.moveCharacter(direction)
    setBoard(boardManager.board)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View></View>

        <View style={styles.container}>
          <View />
          <Board board={board} />
        </View>

        <View>
          <Controls move={(direction) => moveHandler(direction)} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'blue',
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  board: {
    // height: '50%',
    // width: '50%',
    // backgroundColor: 'red',
  }
});

export default App;
