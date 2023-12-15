import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View } from 'react-native';
import React, { useState } from "react";
import { MyButton } from "./components/MyButton/MyButton";
import { MyInput } from "./components/MyInput/MyInput";

export default function App() {
    type Task = { description: string }
    const [taskDescription, setText] = useState('Texto');
    const [tasks, setTasks] = useState<Task[]>([]);

    const changeText = (value: string) => {
        setText(value)
        console.log(taskDescription)
    }

    const submitTask = () => {
        const newTask: Task = { description: taskDescription }
        setTasks([...tasks, newTask])
        console.log('Tarefas', tasks)
    }

    const onPressButton = () => {
        console.log("Oiiiiii")
    }

    return (
        <View style={ styles.container }>
            <View style={ styles.addTask }>
                <View style={ styles.inputText }>
                    <MyInput
                        onChangeText={ changeText }
                        onSubmitEditing={ submitTask }
                        placeholder={ 'OIIIII' }
                    />

                </View>
                <View>
                    <MyButton
                        onPress={ submitTask }
                        buttonText={ "Teste butuaum" }
                    >
                        <Image source={ require('./assets/plus.png') } style={ styles.imageStyle }/>
                    </MyButton>
                </View>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
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
    },
    imageStyle: {
        width: 20,
        height: 20,
    },
    inputText: {
        padding: 10,
        flex: 1,
    }
});
