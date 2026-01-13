import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.tarea}>
        <TextInput style={ styles.input} placeholder='Tarea' />
        <Button title='Nueva' />
      </View>
      <Text style={{ padding: 50, color: 'teal', fontWeight: 900 }}>Hola Coder!</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  tarea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '20'
  },
  input: {
    width: '50%',
    borderColor: '#999',
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
