import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Beacon = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.textB}>
                Beacon Screen
            </Text>
            <TouchableOpacity title="HomeScreen" onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textC}>
                    Go to Home
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
    },
    textB: {
        color: 'black',
        fontSize: 32,
        fontWeight: 'bold',
    },
    textC: {
        color: 'blue',
        fontSize: 16,
    }
});

export default Beacon;