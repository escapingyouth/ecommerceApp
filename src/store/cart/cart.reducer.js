import { createSlice } from '@reduxjs/toolkit';

// add a new item to the cart or increase the quantity of an existing item
export const addCartItem = (cartItems, productToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// remove an item from the cart or decrease the quantity of an existing item
export const removeCartItem = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);
	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

// remove a specific item from the cart
export const clearCartItem = (cartItems, cartItemToClear) => {
	return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

const initialState = {
	cartItems: [],
	isCartOpen: false
};
const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemToCart(state, action) {
			state.cartItems = addCartItem(state.cartItems, action.payload);
		},
		removeItemFromCart(state, action) {
			state.cartItems = removeCartItem(state.cartItems, action.payload);
		},
		clearItemFromCart(state, action) {
			state.cartItems = clearCartItem(state.cartItems, action.payload);
		},

		setIsCartOpen(state, action) {
			state.isCartOpen = action.payload;
		}
	}
});

export const {
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart,
	setIsCartOpen
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
