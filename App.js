import { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  // message guarda el texto; setMessage lo actualiza
  const [message, setMessage] = useState('');

  const showMessage = () => {
    setMessage('¡Hola, mundo!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <Button title="Mostrar Mensaje" onPress={showMessage} />

      {/* Botón personalizado con TouchableOpacity */}
      <TouchableOpacity style={styles.button} onPress={showMessage}>
        <Text style={styles.text}>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  message: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
  },
});