# Mobile Application Development - Assignment 6

## Overview

This project is a mobile application developed using React Native for the DCIT202 Mobile Application Development course. The app features a shopping interface where users can view a selection of clothing items, add items to a cart, and manage their cart contents.

## Features

- **Home Screen**: Displays a list of products in a grid layout. Users can add products to their cart.
- **Cart Screen**: Displays the products added to the cart. Users can remove products from the cart and view the total cost.
## Screens

### Home Screen

- Displays a list of products in a grid layout.
- Each product card includes an image, name, price, and an "Add to Cart" button.
- Products are displayed side by side using `FlatList` with `numColumns` set to 2.
- `ScrollView` is used to make the content scrollable.

### Cart Screen

- Displays the products added to the cart.
- Each product card in the cart includes an image, name, price, and a "Remove from Cart" button.
- The total cost of the products in the cart is displayed at the bottom.

## Implementation Details

### HomeScreen.js

- **Products Data**: An array of product objects with id, name, price, and image.
- **State Management**: State for managing the cart using `useState` and `useEffect`.
- **Add to Cart**: Function to add products to the cart and store the cart in `AsyncStorage`.
- **Grid Layout**: Implemented using `FlatList` with `numColumns` and `columnWrapperStyle`.

### CartScreen.js

- **State Management**: State for managing the cart using `useState` and `useEffect`.
- **Remove from Cart**: Function to remove products from the cart and update `AsyncStorage`.
- **Total Calculation**: Calculates and displays the total cost of the products in the cart.

## Installation and Setup

### Prerequisites

- Node.js
- React Native CLI
- Android Studio or Xcode for iOS development

### Steps

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>

### Usage
- Home Screen: Browse through the list of products. Tap "Add to Cart" to add products to your cart.
- Cart Screen: View the products in your cart, remove products if needed, and see the total cost.

- 

