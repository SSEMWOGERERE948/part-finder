import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Create the Login component
const Login = () => {
  const navigation = useNavigation(); // Initialize navigation using useNavigation
  const [email, setEmail] = useState('test@example.com'); // Default email
  const [password, setPassword] = useState('testpassword'); // Default password
  const [loginSuccessful, setLoginSuccessful] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here, e.g., check credentials and set loginSuccessful to true if successful.
    // For simplicity, let's just check if the provided email and password match the default values.
    if (email === 'test@example.com' && password === 'testpassword') {
      setLoginSuccessful(true);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          style={styles.input}
        />
        <Button title="Login" onPress={handleLogin} style={styles.button} />
        <TouchableOpacity onPress={() => alert('Forgot Password clicked')}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        {loginSuccessful ? (
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.signUp}>Continue to Home</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signUp}>Sign Up</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#2196F3',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
  },
  forgotPassword: {
    textAlign: 'center',
    color: '#2196F3',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  signUp: {
    textAlign: 'center',
    color: '#2196F3',
    textDecorationLine: 'underline',
  },
});

export default Login;
