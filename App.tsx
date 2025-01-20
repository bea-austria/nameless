/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import './global.css';
import MainStack from './src/navs/MainStack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {

  return (
    <GestureHandlerRootView>
      <MainStack />
    </GestureHandlerRootView>
  );
}


export default App;
