import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native'
import React from 'react';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [postText, setPostText] = React.useState('');

    return (
        <View style={styles.container}>
            <TextInput
                multiline
                placeholder="What's on your mind?"
                style={{ height: 200, padding: 10, backgroundColor: 'white' }}
                value={postText}
                onChangeText={setPostText}
            />
            <Text style={styles.textB}>HomeScreen</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    navigation.navigate('Details', {
                        itemId: 24,
                        post: postText,
                    });
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
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

export default HomeScreen;