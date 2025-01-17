/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';
import { ScrollView, Text, View } from 'react-native';


const App = () => {

  return (
    <SafeAreaProvider>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className='flex-1'
        >
        <View className='flex-1 justify-center items-center'>
          <Text className='text-red-500 text-xl font-bold'>Hello, Bea!</Text>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}


export default App;
