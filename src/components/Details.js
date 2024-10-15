import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View, Text, Button } from 'react-native';

const Details = ({ route }) => {
    const navigation = useNavigation();
    const { itemId, post } = route.params || {}; 

    return (
        <View style={Styles.container}>
            <Text style={Styles.textB}>Details Screen</Text>
            <Button title="Go to Configuration" onPress={() => {
                navigation.navigate('Configuration', {
                    itemId: itemId,
                    post: post ,
                });
            }} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        width: '100%',
        color: 'white',
        fontSize: 24,
        fontStyle: 'italic',
    },
    textB: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
    }
});

export default Details;