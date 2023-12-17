import {StatusBar} from 'expo-status-bar';
import {FlatList, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useState} from "react";
import {MyButton} from "./components/MyButton/MyButton";
import {MyInput} from "./components/MyInput/MyInput";
import {Task} from "./components/Task/Task";

export type TaskType = { description: string }
export default function App() {
    const [taskDescription, setText] = useState('');
    const [tasks, setTaskTypes] = useState<TaskType[]>([]);

    const changeText = (value: string) => {
        setText(value)
        console.log(taskDescription)
    }

    const submitTask = () => {
        const newTaskType: TaskType = {description: taskDescription}
        setTaskTypes([...tasks, newTaskType])
        setText('')
        console.log('Tarefas', tasks)
    }
    const handleEditTask = (index: number) => {
        console.log(index)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.taskList}>
                <FlatList
                    data={tasks}
                    renderItem={({item, index}) => (
                        <Task
                            title={item.description}
                            onEditPress={() => handleEditTask(index)}
                        />
                    )}
                />
            </View>
            <View style={styles.addTask}>
                <View style={styles.inputText}>
                    <MyInput
                        onChangeText={changeText}
                        onSubmitEditing={submitTask}
                        placeholder={'Digite o nome da tarefa.'}
                        value={taskDescription}
                    />

                </View>
                <View>
                    <MyButton
                        onPress={submitTask}
                    >
                        <Image source={require('./assets/plus.png')} style={styles.imageStyle}/>
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
