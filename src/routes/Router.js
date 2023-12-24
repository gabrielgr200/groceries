import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home/Home';
import Splash from '../pages/Splash/Splash';


const Stack = createNativeStackNavigator();


const Router = () => {
    return (
        <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='Splash'
                component={Splash}
            />
            <Stack.Screen
                name='Home'
                component={Home}
            />
        </Stack.Navigator>
    )
}

export default Router