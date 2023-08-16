import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Empty from './Empty';

function AddTodo(){
    return(
        <>
            <View style={styles.block} />
        </>
    );
};

const styles = StyleSheet.create({
    block:{
        backgroundColor:"aqua",
        height: 64
    },
});

export default AddTodo;