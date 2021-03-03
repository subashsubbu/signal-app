import React, {useState, useLayoutEffect} from 'react'
import { StatusBar } from 'react-native'
import { StyleSheet, Text, View,KeyboardAvoidingView } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { auth } from '../firebase'
// import { StatusBar } from 'expo-status-bar'

const register = ({navigation}) => {
    const [name, setName] = useState ('')
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const [imageUrl, setImageUrl] = useState ('')

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerBackTitle: 'Back To Login',
        })
    }, [navigation])

    const register = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((authUser) =>{
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL:
                    imageUrl || " https://www.vets4pets.com/siteassets/species/cat/close-up-of-cat.jpg?w=585&scale=down "
                })
               
                // https://www.vets4pets.com/siteassets/species/cat/close-up-of-cat.jpg?w=585&scale=down
            })
            .catch((error) => alert(error.message))


    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.outsideContainer}>
                <StatusBar style='light'/>
                <Text style={{marginBottom: 50}}> Create a signal account
                
                </Text>
    
                <View style={styles.InputContainer}>
                    <Input
                        placeholder='Full name'
                        autoFocus
                        type='text'
                        value={name}
                        onChangeText={(text)=> setName(text)}
                        />

                    <Input
                        placeholder='Email'
                        type='text'
                        value={email}
                        onChangeText={(text)=> setEmail(text)}
                        />
                    <Input
                        placeholder='Password'
                        secureTextEntry
                        type='password'
                        value={password}
                        onChangeText={(text)=> setPassword(text)}
                        />
                    <Input
                        placeholder='Profile Picture'                    
                        type='text'
                        value={imageUrl}
                        onChangeText={(text)=> setImageUrl(text)}
                        onSubmitEditing= {register}
                        />
                </View>

                <Button style={styles.button} raised onPress={register} title='register'/>

        </KeyboardAvoidingView>


       
    )
}

export default register

const styles = StyleSheet.create({
    outsideContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,


    },
    button:{
        width: 200

    },
    InputContainer:{
        width: 300

    }
})
