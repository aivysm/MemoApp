import { TouchableOpacity, StyleSheet, Text, Alert } from 'react-native'
import { router } from 'expo-router'
import { auth } from '../config'
import { signOut } from 'firebase/auth'

const handlePress = (): void => {
    signOut(auth)
        .then(() => {
            router.replace('/auth/login')
        }
        )
        .catch(() => {
            Alert.alert('ログアウトに失敗しました')
        }
        )

}
const LogOutButton = (): JSX.Element => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>ログアウト </Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        lineHeight: 14,
        color: 'rgba(255,255,255,0.7)'
    }
})

export default LogOutButton
