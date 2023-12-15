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
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        elevation: 10,
        shadowColor: '#000',
        borderBottomColor: '#c8c8c8',
        borderTopColor: '#c8c8c8',
        backgroundColor: '#fff',
        padding: 10,
    }
});
