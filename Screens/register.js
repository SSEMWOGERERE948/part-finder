import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  const handleSignup = () => {
    // Implement your signup logic here, e.g., validate inputs and create a new user.
    // For simplicity, let's just display the entered values for now.
    alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}\nCountry: ${country}\nCity: ${city}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        placeholder="Name"
        onChangeText={setName}
        value={name}
        style={styles.input}
      />
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
      <TextInput
        placeholder="Retype Password"
        onChangeText={setRetypePassword}
        value={retypePassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Select Country"
        onChangeText={setCountry}
        value={country}
        style={styles.input}
      />
      <TextInput
        placeholder="Select City"
        onChangeText={setCity}
        value={city}
        style={styles.input}
      />
      <Button title="Sign Up" onPress={handleSignup} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    backgroundColor: '#2196F3',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
  },
});

export default Signup;
