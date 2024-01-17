import * as React from 'react';
import {ImageBackground } from 'react-native';

function Index() {
    return (
        <ImageBackground
            source={require('@app/assets/logos/wp3082255.webp')}
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black'
            }}
        >
         <></>

        </ImageBackground>
    );
}

export default Index;