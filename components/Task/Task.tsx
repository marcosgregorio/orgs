import {Image, StyleSheet, Text, View} from "react-native";
import {MyButton, MyButtonProps} from "../MyButton/MyButton";
import React from "react";

type TaskProps = MyButtonProps & {
    title: string,
    onEditPress: () => void,
    onDeletePress: () => void,
}

export const Task = ({title, onEditPress, onDeletePress }: TaskProps) => {
    return (
        <View style={styles.item}>
            <Text style={styles.itemText}> { title } </Text>
            <MyButton
                onPress={onEditPress}
            >
                <Image source={ require('../../assets/pencil.png') } style={ styles.imageStyle }/>
            </MyButton>
            <MyButton
                onPress={onDeletePress}
            >
                <Image source={ require('../../assets/close.png') } style={ styles.imageStyle }/>
            </MyButton>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding:10,
    },
    itemText: {
        // width: '70%',
        flex: 1,
        borderRadius: 16,
        padding: 10,
        elevation: 6,
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
