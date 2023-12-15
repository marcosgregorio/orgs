import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View } from 'react-native';
import React, { useState } from "react";
import { MyButton } from "./components/MyButton/MyButton";
import { MyInput } from "./components/MyInput/MyInput";


export default function App() {
    const [text, setText] = useState('Texto');

    const changeText = (value: string) => {
        setText(value)
        console.log(text)
    }

    const onPressButton = () => {
        console.log("Oiiiiii")
    }

    return (
        <View style={ styles.container }>
            <View style={ styles.addTask }>
                <MyInput
                    onChangeText={ changeText }
                    placeholder={ text }
                />
                <MyButton
                    onPress={ onPressButton }
                    buttonText={ "Teste butuaum" }
                >
                    <Image source={ require('./assets/plus.svg') }/>
                </MyButton>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    addTask: {
        width: '100%',
        justifyContent: 'space-around',
        flexDirection: "row",
        alignItems: "center",
        alignSelf: 'flex-end'
    }
});
