import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { MyButton, MyButtonProps } from "../MyButton/MyButton";
import React from "react";
import { MyInput } from "../MyInput/MyInput";

type TaskProps = MyButtonProps & {
    title: string,
    onEditPress: () => void,
    onDeletePress: () => void,
}

export const Task = ({ title, onDeletePress, onEditPress }: TaskProps) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const inputRef = React.useRef<TextInput | null>(null);
    React.useEffect(() => {
        if (isEditing) {
            inputRef.current?.focus()
        }
    }, [isEditing])

    return (
        <View style={ styles.item }>
            { isEditing ?
                <MyInput
                    style={ styles.itemText }
                    ref={ inputRef }
                    onSubmitEditing={ onEditPress }
                    // onSubmitEditing={ () => {
                    //     console.log('entreiiiiii')
                    // setIsEditing(prev => !prev)
                    // return onEditPress
                    // onSubmitEditing={ () => setIsEditing(prev => !prev) }
                />
                : <Text style={ styles.itemText }> { title } </Text>
            }
            <MyButton
                onPress={ () => setIsEditing(prev => !prev) }
            >
                <Image source={ require('../../assets/pencil.png') } style={ styles.imageStyle }/>
            </MyButton>
            { !isEditing &&
                <MyButton
                    onPress={ onDeletePress }
                >
                    <Image source={ require('../../assets/close.png') } style={ styles.imageStyle }/>
                </MyButton>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10,
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
