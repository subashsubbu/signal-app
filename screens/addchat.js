import React, { useLayoutEffect, useState } from 'react'
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import { db } from '../firebase';

const addchat = ({ navigation }) => {
    const [input, setInput] = useState('');


    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add a new Chat',
            headerBackTitle: 'Chats'

        })
        // return () => {
        //     cleanup
        // };
    }, [navigation])

    const CreateChat = async () => {
        await db.collection('chats').add({
            chatName: input,
        })
            .then(() => {
                navigation.goBack();
            })
            .catch((error) => alert(error))

    }

    return (
        <View style={styles.container}>
            <Input
                placeholder='  Enter a new chat'
                value={input}
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={CreateChat}

                leftIcon={
                    <Icon name='wechat' type='antdesign' size={24} color='black' />
                }
            />
            <Button onPress={CreateChat} title='Create a new Chat' />
        </View>
    )
}

export default addchat

const styles = StyleSheet.create({
    container: {
        padding: 30,
        height: '100%'
    }
})
