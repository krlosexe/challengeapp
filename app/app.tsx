import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from '@app/redux/store';
import RootNavigator from '@app/navigation/root';

function Index() {
    return (
        <Provider store={store}>
           <RootNavigator />
        </Provider>
        
    );
}

export default Index;