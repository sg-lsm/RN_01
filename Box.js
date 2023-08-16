import React from 'react';
import { StyleSheet, View } from 'react-native';

function Box({rounded, size}){
    return <View style={
        [styles.box, 
        rounded ? styles.rounded : null, 
        sizes[size]]
    } />;
};

Box.defaultProps={
    size: 'midium'
}

const styles = StyleSheet.create({
    box:{
        width : 64,
        height : 64,
        backgroundColor: 'aqua'
    },
    rounded:{
        borderRadius: 16
    },
    small:{
        width:32,
        height: 32
    },
    midium:{
        width: 64,
        height: 64
    },
    large:{
        width: 128,
        height: 128
    }
});

const sizes = {
    small: styles.small,
    midium: styles.midium,
    large: styles.large
};

export default Box;