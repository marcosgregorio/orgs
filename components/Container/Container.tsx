import { StyleSheet, View } from "react-native";

type ContainerProps = View & {}

export const Container = ({ props }: ContainerProps) => {
    return (
        <View style={ styles.container }>
            { props.children }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
