import { View, Text, StyleSheet, TextInput } from "react-native"
import Header from "../../components/header"
import Button from "../../components/button"

const sign_up = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput style={styles.input} value="Email" />
                <TextInput style={styles.input} value="Password" />
                <Button label='Submit' />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already Registared?</Text>
                    <Text style={styles.footerLink}>Log in</Text>
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
