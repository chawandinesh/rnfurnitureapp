import React from 'react';
import {LogBox} from 'react-native'

import StackNavigator from './src/navigators/stacknavigator/stackNavigator';
export default function App() {
  LogBox.ignoreLogs(['Warning: ...']);

  return <StackNavigator />;
}
