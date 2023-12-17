import { StatusBar } from 'expo-status-bar';
import {FlatList, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import React, { useState } from "react";
import { MyButton } from "./components/MyButton/MyButton";
import { MyInput } from "./components/MyInput/MyInput";
import { Task } from "./components/Task/Task";

export type TaskType = { description: string }
export default function App() {
    const [taskDescription, setText] = useState('');
    const [tasks, setTaskTypes] = useState<TaskType[]>([]);

    const changeText = (value: string) => {
        setText(value)
        console.log(taskDescription)
    }

    const submitTaskType = () => {
        const newTaskType: TaskType = { description: taskDescription }
        setTaskTypes([...tasks, newTaskType])
        console.log('Tarefas', tasks)
    }

    return (
        <SafeAreaView  style={ styles.container }>
            <View style={ styles.taskList }>
                <FlatList
                    data={ tasks }
                    renderItem={ ({item}) => <Task title={item.description}/> }
                    // contentContainerStyle={{ marginVertical: 10 }}
                />
            </View>
            <View style={ styles.addTask }>
                <View style={ styles.inputText }>
                    <MyInput
                        onChangeText={ changeText }
                        onSubmitEditing={ submitTaskType }
                        placeholder={ 'Digite o nome da tarefa.' }
                    />

                </View>
                <View>
                    <MyButton
                        onPress={ submitTaskType }
                    >
                        <Image source={ require('./assets/plus.png') } style={ styles.imageStyle }/>
                    </MyButton>
                </View>
            </View>
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        flex: 1,
        backgroundColor: '#fff',
    },
    taskList: {
        padding: 8,
    },
    addTask: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        flexDirection: "row",
        alignItems: "center",
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
