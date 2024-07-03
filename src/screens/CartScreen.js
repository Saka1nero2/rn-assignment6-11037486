import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = () => {
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

  const removeFromCart = async (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      {cart.length > 0 ? (
        cart.map((product) => (
          <View key={product.id} style={styles.productContainer}>
            <Image source={product.image} style={styles.productImage} />
            <Text style={styles.productTitle}>{product.name}</Text>
            <Text style={styles.productPrice}>${product.price}</Text>
            <Button title="Remove from Cart" onPress={() => removeFromCart(product)} />
          </View>
        ))
      ) : (
        <Text style={styles.emptyCart}>Your cart is empty</Text>
      )}
      <Text style={styles.total}>
        Total: ${cart.reduce((sum, item) => sum + item.price, 0)}
      </Text>
    </ScrollView>
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
  productContainer: {
    marginBottom: 30,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: 18,
    marginTop: 10,
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
  emptyCart: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default CartScreen;
