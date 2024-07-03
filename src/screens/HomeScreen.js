import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Button, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const products = [
  { id: 1, name: 'Reversible Angora Cardigan', price: 120, image: require('../../assets/dress1.png') },
  { id: 2, name: 'Recycle Boucle Knit Cardigan Pink', price: 120, image: require('../../assets/dress2.png') },
  { id: 3, name: 'Office Wear', price: 120, image: require('../../assets/dress3.png') },
  { id: 4, name: 'Casual Shirt', price: 60, image: require('../../assets/dress4.png') },
  { id: 5, name: 'Denim Jacket', price: 80, image: require('../../assets/dress5.png') },
  { id: 6, name: 'Formal Suit', price: 200, image: require('../../assets/dress6.png') },
  { id: 7, name: 'Summer Dress', price: 50, image: require('../../assets/dress7.png') },
  
];

const HomeScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      const savedCart = await AsyncStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    };
    loadCart();
  }, []);

  const addToCart = async (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(item)} />
    </View>
  );

  return (
    
      <View style={styles.container}>
        <Text style={styles.title}>OUR STORY</Text>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list}
        />
        <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  productContainer: {
    width: Dimensions.get('window').width / 2 - 30,
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
});

export default HomeScreen;
