import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Task from '../components/Tasks'

const Home = () => {
    const title = 'APP ToDo'
  return (
    <View>
        <Header title={title} />
        <Task />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})