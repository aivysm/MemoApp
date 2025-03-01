import { View, StyleSheet, TextInput, KeyboardAvoidingView } from "react-native"

import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"
import { router } from 'expo-router'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../config'
const handlePress = async (): void => {
    addDoc(collection(db, 'memos'), {
        bodyText: 'Hello, World!'
    })
        .then((docRef) => {
            console.log('success', docRef.id)
            router.back()
        }).catch((error) => {
            console.log(error)
        })
}
const create = (): JSX.Element => {
    return (
        <KeyboardAvoidingView behavior='height' style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput multiline style={styles.input} value='' />
            </View>
            <CircleButton onPress={handlePress}>
                <Icon name="check" size={40} color='#ffffff' />
            </CircleButton>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputContainer: {
        backgroundColor: '#ffffff',
        paddingVertical: 32,
        paddingHorizontal: 27,
        flex: 1
    },
    input: {
        flex: 1,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24

    }

})
export default create
