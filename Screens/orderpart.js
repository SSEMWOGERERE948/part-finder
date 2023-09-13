import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet, TouchableOpacity, CameraRoll } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const orderpart= () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle text-based product search
  const handleTextSearch = () => {
    // Implement product search logic here based on searchText
    // For simplicity, let's just set some dummy search results
    setSearchResults(['Product 1', 'Product 2', 'Product 3']);
  };

  // Handle image-based product search
  const handleImageSearch = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permission.status === 'granted') {
      const result = await ImagePicker.launchCameraAsync();
      
      if (!result.cancelled) {
        // Implement image recognition logic here to search for products
        // For simplicity, let's just display the selected image
        setSelectedImage(result.uri);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Product Search</Text>
      <TextInput
        placeholder="Search by product name"
        style={styles.input}
        onChangeText={setSearchText}
        value={searchText}
      />
      <Button title="Search by Text" onPress={handleTextSearch} />
      <Button title="Search by Camera" onPress={handleImageSearch} />
      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
      <Text style={styles.resultsHeading}>Search Results:</Text>
      {searchResults.map((result, index) => (
        <TouchableOpacity key={index} style={styles.resultItem}>
          <Text>{result}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  resultsHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  resultItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    width: '100%',
    marginTop: 8,
    borderRadius: 8,
  },
});

export default orderpart;
