import { View, StyleSheet } from 'react-native'
import MemoListItem from '../../components/memoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { useNavigation, router } from 'expo-router'
import { useEffect } from 'react'
import LogOutButton from '../../components/logout'
const handlePress = (): void => {
    router.push('/memo/create')
}
const List = (): JSX.Element => {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => { return <LogOutButton /> }
        })
    }, [])
    return (
        <View style={styles.container}>
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
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
