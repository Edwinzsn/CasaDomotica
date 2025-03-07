import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [containerIndex, setContainerIndex] = useState(0);

  // Credenciales permitidas
  const users = {
    'Edwin': 'edwinzoe2207',
    'Diego': 'diegocr7'
  };

  // Verifica credenciales
  const handleLogin = () => {
    if (users[username] && users[username] === password) {
      setIsAuthenticated(true);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  // Imágenes del contenedor (niveles de agua)
  const containerImages = [
    require('./assets/contenedor_100.jpg'),
    require('./assets/contenedor_75.jpg'),
    require('./assets/contenedor_50.jpg'),
    require('./assets/contenedor_25.jpg'),
    require('./assets/contenedor_0.jpg'),
  ];

  const handleAction = () => {
    if (containerIndex < containerImages.length - 1) {
      setContainerIndex(containerIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      {isAuthenticated ? (
        // Pantalla principal después del inicio de sesión
        <>
          <Image source={containerImages[containerIndex]} style={styles.containerImage} />
          <Text style={styles.title}>Casa Domótica</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleAction} style={styles.button}>
              <Text style={styles.buttonText}>Regar Plantas</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAction} style={styles.button}>
              <Text style={styles.buttonText}>Regadera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAction} style={styles.button}>
              <Text style={styles.buttonText}>Taza de Baño</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        // Pantalla de inicio de sesión
        <>
          <Text style={styles.title}>Iniciar Sesión</Text>
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ded9c0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  containerImage: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingBottom: 40,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: 120,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
