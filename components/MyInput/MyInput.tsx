import { StyleSheet, TextInput, TextInputProps } from "react-native";
import React from "react";

/**
 * const InputIcon = React.forwardRef<unknown, InputIconProps>(({ children }, ref) => {
 *     const {} = useInputContext();
 *     return (
 *         <Box
 *             ref={ref}
 *             alignItems={"center"}
 *             bottom={12}
 *             height={24}
 *             justifyContent={"center"}
 *             left={20}
 *             position={"absolute"}
 *             zIndex={2}>
 *             {children}
 *         </Box>
 *     );
 * });
 * */
export const MyInput = React.forwardRef<TextInput, TextInputProps>((props, ref) => {
    return (
        <TextInput
            style={ styles.input }
            ref={ref}
            { ...props }
        />
    )
})

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