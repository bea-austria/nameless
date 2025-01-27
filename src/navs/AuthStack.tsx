import { useRef } from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { ScreenRef } from '../helper/ScreenRef';
import Login from '../screens/auth/Login';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const AuthStack = () => {
    const routeRef = useRef<any>(null);

    return (
        <SafeAreaView className='flex-1 w-full'>
            <Stack.Navigator
                initialRouteName={ScreenRef.Login}
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: false,
                    gestureDirection: 'horizontal',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}
            >
                <Stack.Screen name={ScreenRef.Login} component={Login} />
            </Stack.Navigator>
        </SafeAreaView>
    );
}


export default AuthStack;