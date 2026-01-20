import { StyleSheet, Modal, View, Text, Button } from "react-native";


const ModalTask = ( props) => {
    const { modalVisible, onCerrar, onFinalizar, item } = props;

    return (
        <Modal visible={modalVisible} transparent animationType="fade">
            <View style={ styles.modalContainer}>
                <View style={ styles.modalContent}>
                    <Text style={ styles.modalTitle} > Soy un Componente Modal</Text>
                    <Text> Fecha</Text>
                </View>
                <View style={styles.modalFooter}>
                    <Button 
                        title="Cerrar" 
                        onPress={onCerrar} 
                    />
                    <Button title="Finalizar" onPress={onFinalizar} />

                </View>
            </View>

        </Modal>
    )

}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: '100%',
        backgroundColor: '#16161673'
    },
    modalTitle: {
        fontSize: 26,
        fontWeight: '600'
    },
    modalContent: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 10,
        justifyContent: 'space-between',
    },
    modalFooter: {
        flexDirection: 'row',
        gap: 10

    }
})

export default ModalTask