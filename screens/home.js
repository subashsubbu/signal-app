import React, { useLayoutEffect, useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import CustomListItem from '../components/CustomListItem'
import { Button, Input, Avatar } from 'react-native-elements'
import { auth, db } from '../firebase'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'

export default function home({ navigation }) {

    const [chats, setChats] = useState([]);


    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace('Login')
        })
    }

    useEffect(() => {
        const unsubscribe = db.collection('chats').onSnapshot((snapshot) =>
            setChats(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
        return unsubscribe
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Signal',
            // headerStyle = {
            //     background

            // }
            headerLeft: () => (
                <View style={{ marginLeft: 20 }} >
                    <TouchableOpacity>
                        <Avatar rounded source={{ uri: 'auth?.currentUser?.photoURL' }} />
                    </TouchableOpacity>

                </View>
            ),
            headerRight: () => (
                <SafeAreaView style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: 80,
                    marginRight: 20
                }}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name='camerao' size={24} color='black' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AddChat')} activeOpacity={0.5}>
                        <SimpleLineIcons name='pencil' size={24} color='black' />
                    </TouchableOpacity>
                </SafeAreaView>
            )

        })

    })

    const enterChat = (id, chatName) => {
        navigation.navigate('Chat', {
            id, chatName,
        })

    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                {chats.map(({ id, data: { chatName } }) => (
                    <CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChat} />
                ))}

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    }
})
