import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  const handleButtonClick = (category) => {
    // Navigate to the respective category screen or perform the desired action
    // For now, let's just display an alert with the selected category
    alert(`Selected Category: ${category}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <TouchableOpacity
          style={[styles.button, { backgroundColor: 'rgba(0, 128, 0, 0.5)' }]}
          onPress={() => navigation.navigate('orderpart')} // Navigate to the OrderPart screen
        >
          <Text style={styles.buttonText}>Spare Parts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'rgba(0, 128, 0, 0.5)' }]}
          onPress={() => handleButtonClick('Mechanics')}
        >
          <Text style={styles.buttonText}>Mechanics</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'rgba(0, 128, 0, 0.5)' }]}
          onPress={() => handleButtonClick('Car Sales')}
        >
          <Text style={styles.buttonText}>Car Sales</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'center', // Center buttons horizontally
    alignItems: 'center', // Center buttons vertically
  },
  button: {
    flex: 1, // Equal width for all buttons
    margin: 10,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#008000', // Faded green border
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black', // Faded green text
  },
});

export default Home;
