import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";

type MyButtonProps = TouchableOpacityProps & {
    buttonText: string
}

export const MyButton = ({ buttonText, ...props }: MyButtonProps) => {
    return (
        <TouchableOpacity
            { ...props }
            style={ styles.button }
        >
            { props.children }
            {/*<Text>*/ }
            {/*    { buttonText }*/ }
            {/*</Text>*/ }
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        // borderBottomRightRadius: 500,
        elevation: 10,
        shadowColor: '#000',
        borderBottomColor: '#c8c8c8',
        borderTopColor: '#c8c8c8',
        backgroundColor: '#fff',
        padding: 10,
    }
});
