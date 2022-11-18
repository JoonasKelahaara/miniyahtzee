import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e3fcf7',
      marginTop: StatusBar.currentHeight || 0
    },
    header: {
        fontSize: 50,
        backgroundColor: '#3eb865',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    button: {
        alignSelf: 'center',
        backgroundColor: '#529c61',
        padding: 8,
        borderRadius: 5,
        marginTop: 10
    },
    buttonText: {
        fontSize: 25
    },
    text: {
        alignSelf: 'center'
    },
    totalText: {
        alignSelf: 'center',
        fontSize: 20
    },
    footer: {
        marginTop: 10,
        backgroundColor: '#3eb865',
        textAlign: 'center',
    },
    gameboard: {
        backgroundColor: '#e3fcf7',
        alignItems: 'center',
        justifyContent: 'center'
      },
    flex: {
        flexDirection: "row"
      }
  });