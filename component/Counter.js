import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function Counter ({count, onIncrease, onDecrease}) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.numberAres}>
                <Text style={styles.number}>{count}</Text>
            </View>
            <Button title= "+1" onPress={onIncrease} />
            <Button title= "-1" onPress={onDecrease} />
        </View>
    );
};

Counter.defaultProps={
    count:0
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1
    },
    numberAres:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },
    number:{
        fontSize: 72,
        fontWeight: 'bold'
    }
});

export default Counter;