import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 5,
        justifyContent: 'flex-end',
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
    },
    resultadoPequeño: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 3,
    },
    botonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18,
        paddingHorizontal: 5
    }
});