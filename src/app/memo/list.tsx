import { View, StyleSheet } from 'react-native'
import MemoListItem from '../../components/memoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { useNavigation, router } from 'expo-router'
import { useEffect, useState } from 'react'
import LogOutButton from '../../components/logout'
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore'
import { db, auth } from '../../config'
import { type Memo } from '../../../types/memo'

const handlePress = (): void => {
    router.push('/memo/create')
}
const List = (): JSX.Element => {
    const [memos, setMemos] = useState<Memo[]>([])
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => { return <LogOutButton /> }
        })
    }, [])
    useEffect(() => {
        if (auth.currentUser === null) { return }
        const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
        const q = query(ref, orderBy('updateAt', 'desc'))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const remoteMemos: Memo[] = []
            snapshot.forEach((doc) => {
                console.log('memo', doc.data())
                const { bodyText, updatedAt } = doc.data()
                remoteMemos.push({
                    id: doc.id,
                    bodyText,
                    updatedAt
                })
            })
            setMemos(remoteMemos)
        })
        return unsubscribe
    }, [])
    return (
        <View style={styles.container}>
            <View>
                {memos.map((memo) => {
                    return <MemoListItem key={memo.id} memo={memo} />
                })}
            </View>
            <CircleButton onPress={handlePress}>
                <Icon name='plus' size={40} color='#ffffff' />
            </CircleButton>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
})

export default List
