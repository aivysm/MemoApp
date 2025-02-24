import { View, StyleSheet } from 'react-native'
import Header from '../../components/header'
import MemoListItem from '../../components/memoListItem'
import CircleButton from '../../components/CircleButton'

const List = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>
            <CircleButton>+</CircleButton>
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
