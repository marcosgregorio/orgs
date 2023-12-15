import { TextInput } from "react-native";

type MyInputProps = TextInput & {
    placeholder: string;
}
export const MyInput = ({ placeholder, ...props }: MyInputProps) => {
    return (
        <TextInput
            { ...props }
            value={ placeholder }
        />
    )
}