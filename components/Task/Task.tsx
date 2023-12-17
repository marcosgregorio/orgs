import {Image, StyleSheet, Text, View} from "react-native";
import {MyButton} from "../MyButton/MyButton";
import React from "react";

export const Task = ({...props}) => {
    return (
        <View style={styles.item}>
            <Text style={styles.itemText}> {props.title} </Text>
            <MyButton>
                <Image source={ require('../../assets/pencil.png') } style={ styles.imageStyle }/>
            </MyButton>
            <MyButton>
                <Image source={ require('../../assets/close.png') } style={ styles.imageStyle }/>
            </MyButton>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 8,
        alignItems: 'center',
        gap: 10,
        padding:8,
    },
    itemText: {
        // width: '70%',
        flex: 1,
        borderRadius: 16,
        padding: 10,
        elevation: 10,
        shadowColor: '#000',
        borderBottomColor: '#c8c8c8',
        borderTopColor: '#c8c8c8',
        backgroundColor: '#fff',
    },
    imageStyle: {
        width: 20,
        height: 20,
    }
})
