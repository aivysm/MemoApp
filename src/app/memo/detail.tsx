import { View, Text, ScrollView, StyleSheet } from 'react-native'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { router } from 'expo-router'
const handlePress = (): void => {
    router.push('/memo/edit')
}
const Detail = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2023年10月11日 10:00</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    aaaaテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
                </Text>
            </ScrollView>
            <CircleButton onPress={handlePress} style={{ top: 60, bottom: 'auto' }} >
                <Icon name='pencil' size={40} color='#ffffff' />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    memoHeader: {
        backgroundColor: '#467FD3',
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19
    },
    memoTitle: {
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    memoDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#ffffff'
    },
    memoBody: {
        backgroundColor: '#ffffff',
        paddingVertical: 32,
        paddingHorizontal: 27
    },
    memoBodyText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    }
})


export default Detail
