import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native"
import Button from "../../components/button"
import { Link, router } from "expo-router"
import { useState } from "react"
import { auth } from "../../config"
import { createUserWithEmailAndPassword } from "@firebase/auth"

const handlePress = (email: string, password: string): void => {
    console.log(email, password)
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential.user.uid)
            router.replace('/memo/list')
        })
        .catch((error) => {
            const { code, message } = error
            console.log(code, message)
            Alert.alert(message)
        })

}

const sign_up = (): JSX.Element => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => { setEmail(text) }}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="Email Address" />
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => { setPassword(text) }}
                    autoCapitalize="none"
                    secureTextEntry
                    placeholder="password"
                    textContentType="password"
                />
                <Button onPress={() => { handlePress(email, password) }} label='Submit' />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already Registared?</Text>
                    <Link href='/auth/login' asChild replace>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Log in</Text>
                        </TouchableOpacity></Link>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8'
    },
    inner: {
        paddingHorizontal: 27,
        paddingVertical: 24
    },
    input: {
        fontSize: 16,
        height: 48,
        borderColor: '#dddddd',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        padding: 8,
        marginBottom: 16
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 24
    },
    footer: {
        flexDirection: 'row'
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467FD3'
    }
})

export default sign_up                       
