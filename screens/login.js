import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Button, Image, Input } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
import { auth } from '../firebase'

const login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace('Home')
            }
        })

        return unsubcribe;
    }, [])

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
            .catch((error) => alert(error))


    }
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.outsideContainer}>
            <StatusBar style='light' />
            <Image source={{
                uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa9%2FSignal_ultramarine_icon.png&f=1&nofb=1',

            }}
                style={{ width: 200, height: 200, borderRadius: 20, marginBottom: 30 }} />

            <View style={styles.Inputcontainer}>
                <Input placeholder='Email' autoFocus type='Email' value={email} onChangeText={(text) => setEmail(text)} />
                <Input placeholder='Password' secureTextEntry type='Password' value={password} onChangeText={(text) => setPassword(text)} onSubmitEditing={signIn} />

            </View>
            <Button title='Login' containerStyle={styles.button} onPress={signIn} />
            <Button onPress={() => navigation.navigate('Register')} title='Register' containerStyle={styles.button} type='outline' />
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
};

export default login;

const styles = StyleSheet.create({
    outsideContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white'

    },
    Inputcontainer: {
        width: 300,


    },
    button: {
        width: 200,
        marginTop: 10

    }
});
