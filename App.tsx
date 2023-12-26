import {StatusBar} from 'expo-status-bar';
import {FlatList, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from "react";
import {MyButton} from "./components/MyButton/MyButton";
import {MyInput} from "./components/MyInput/MyInput";
import {Task} from "./components/Task/Task";

export type TaskType = { description: string }
export default function App() {
    const [taskDescription, setText] = useState('');
    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const changeText = (value: string) => {
        setText(value)
        console.log(taskDescription)
    }

    const submitTask = () => {
        setErrorMessage('');
        if (taskDescription.trim() === '') {
            setErrorMessage('* Por favor, adicione algo ao input.');
            return; // Impedir a adição de tarefa se a descrição estiver vazia
        }
        const newTaskType: TaskType = {description: taskDescription}
        setTasks([...tasks, newTaskType])
        setText('')
        console.log('Tarefas', tasks)
    }
    const handleEditTask = (index: number) => {
        console.log(index)
    }

    const handleDeleteTask = (index: number) => {
        setTasks((prevTasks) => {
            return prevTasks.splice(index, 1);
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.taskList}>
                <FlatList
                    data={tasks}
                    renderItem={({item, index}) => (
                        <Task
                            title={item.description}
                            // onEditPress={() => handleEditTask(index)}
                            onDeletePress={() => handleDeleteTask(index)}
                        />
                    )}
                />
            </View>
            <View style={styles.addTask}>
                <View style={styles.inputText}>
                    {errorMessage && (
                        <Text style={styles.errorMessage}> {errorMessage} </Text>
                    )}
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
        paddingVertical: 32,
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
    },
    errorMessage: {

        color: 'red',
    }
});
