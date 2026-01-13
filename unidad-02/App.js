import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {

  const [ textItem, setTextItem ] = useState('estudiar JS');
  const [ itemList, setItemList ] = useState([]);

  const onHandlerChangeItem = (t) => {
    setTextItem(t)
  }

  const addItem = () => {
    if( textItem.trim() === ''){
      return;
    }

    const task = {
      id: Math.random().toString(),
      value: textItem
    }
    setItemList( prev => [ ...prev, task ]  );
    setTextItem('');

    console.log('Agregando Tarea');
  }
  
  return (
    <View style={styles.container}>

      <View style={styles.tarea}>
        <TextInput 
          style={ styles.input} 
          placeholder='Tarea...' 
          value={textItem}
          onChangeText={ onHandlerChangeItem }
          />
        <Button title='Nueva' onPress={addItem} />
      </View>
      <Text style={{ padding: 50, color: 'teal', fontWeight: 900 }}>Hola Coder!</Text>
      <View>

        { 
          itemList.map( item =>
            <view style={styles.itemList}>  
              <Text>{ item.value }</Text> 
            </view>  )
        }

      </View>
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
  itemList: {
    backgroundColor: '#1adbed',
    margin: 2,
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
