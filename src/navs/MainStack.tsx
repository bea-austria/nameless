import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { useRef } from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { ScreenRef } from '../helper/ScreenRef';
import Splash from '../screens/Splash';
import { View } from 'react-native';
import AuthStack from './AuthStack';

const Stack = createStackNavigator();

const MainStack = () => {
  const routeRef = useRef<any>(null);

  return (
    <SafeAreaProvider>
      <NavigationContainer
      ref={routeRef}
      >
        <View className="flex-1">
          <Stack.Navigator
          initialRouteName={ScreenRef.AuthStack}
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
          >
            <Stack.Screen name={ScreenRef.Splash} component={Splash}/>
            <Stack.Screen name={ScreenRef.AuthStack} component={AuthStack}/>
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


export default MainStack;