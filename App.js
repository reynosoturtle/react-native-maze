/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
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

const App: () => React$Node = () => {
  let size = {
    rows: 10,
    cols: 10
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View></View>

        <View style={styles.container}>
          <View />
          <Board size={size} />
        </View>

        <View>
          <Controls />
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
