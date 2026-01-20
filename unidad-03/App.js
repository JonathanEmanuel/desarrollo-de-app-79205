import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';

// Importamos componentes
import ModalTask from './components/ModalTask';

export default function App() {

  const [ textItem, setTextItem ] = useState('');
  const [ itemList, setItemList ] = useState([]);
  
  const [ modalVisible, setModalVisible] = useState( false)
  const onHandlerChangeItem = (t) => {
    setTextItem(t)
  }

  // Manejo del modalTask
  const handlerModalCerrar = () => {
    setModalVisible(false);
  }

  const handlerModalAbrir = () => {
    console.log('Abrir')
    setModalVisible(true);
  }

  const finalizarTarea = ( id ) => {
    console.log('Finalizado tarea');
    handlerModalCerrar();
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
      <View style={styles.container}>
      <FlatList
        data={ itemList}
        keyExtractor={( item ) => item.id}
        renderItem={ ( { item} ) => (
            <view style={styles.itemList} onClick={ handlerModalAbrir}>  
              <Text style={{ color:'white'}}>{ item.value }</Text> 
            </view>
        )}
      >
      </FlatList>
      </View>

        <ModalTask 
          modalVisible={ modalVisible }
          onCerrar={ handlerModalCerrar }
          onFinalizar={finalizarTarea}  
        />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  tarea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '20',
    padding: 15
    
  },
  input: {
    width: '50%',
    borderColor: '#999',
    borderWidth: 1,
    padding: 10,
  },
  itemList: {
    backgroundColor: 'teal',
    margin: 2,
    borderWidth: 1,
    padding: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
