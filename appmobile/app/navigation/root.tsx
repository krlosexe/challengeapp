import React from 'react';
import {
    NavigationContainer,
    createNavigationContainerRef,
  } from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import {useInit} from '@app/hooks/useInit';
import {AppStateType} from '@app/redux/store';
import {useSelector} from 'react-redux';
import SplashScreen from '@app/screens/splash';
import HomeScreen from '@app/screens/home';
import UserDetail from '@app/screens/userDetail';
import Footer from '@app/components/footer';
const MainStack = createStackNavigator();
export const navigationRef = createNavigationContainerRef();

const RootNavigator = (): JSX.Element => {
    useInit();
    const {
        isFirstLoad,
    } = useSelector((state: AppStateType) => state.initLoad);

    return (
      <>
       <NavigationContainer ref={navigationRef}>
            <MainStack.Navigator screenOptions={{headerShown: false}}>
                {!isFirstLoad ? (
                    <>
                      <MainStack.Screen name="Home" component={HomeScreen} />
                      <MainStack.Screen name="UserDetail" component={UserDetail} />
                    </>
                ): (
                    <MainStack.Screen name="Splash" component={SplashScreen} />
                )}
            </MainStack.Navigator>
         </NavigationContainer>
         <Footer />
      </>
      
    );
  };
  
  export default RootNavigator;