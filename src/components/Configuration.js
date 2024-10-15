import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Beacon from "./Beacon";

const Configuration = ({route}) => {
    const navigation = useNavigation();
    const { itemId, post } = route.params || {};
    return (
        <View style={styles.container}>
            <View style={styles.halfScreen}>
                <Text style={styles.textB}>
                    Configuration Screen
                </Text>
                <Button
                    title="Go back to first screen in stack"
                    onPress={() => navigation.popToTop()} />

                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>post: {JSON.stringify(post)}</Text>
            </View>
            <View style={styles.halfScreen}>
                <Beacon />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    halfScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
    },
    textB: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
    }
});

export default Configuration;