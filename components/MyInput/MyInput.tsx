import { StyleSheet, TextInput, TextInputProps } from "react-native";

type MyInputProps = TextInputProps & {
    placeholder: string;
}
export const MyInput = ({ placeholder, ...props }: MyInputProps) => {
    return (
        <TextInput
            style={ styles.input }
            { ...props }
            placeholder={ placeholder }
        />
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderRadius: 16,
        elevation: 10,
        shadowColor: '#000',
        borderBottomColor: '#c8c8c8',
        borderTopColor: '#c8c8c8',
        backgroundColor: '#fff',
        padding: 10,
    }
})