import createAction from '../../utilities/reducer/reducer.utils';
import cartActionTypes from './cart.types';

import {
	addCartItem,
	removeCartItem,
	clearCartItem
} from './cart.action.helpers';

export const setIsCartOpen = (boolean) =>
	createAction(cartActionTypes.setIsCartOpen, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
	const newCartItems = addCartItem(cartItems, productToAdd);
	return createAction(cartActionTypes.setCartItems, newCartItems);
};
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const newCartItems = removeCartItem(cartItems, cartItemToRemove);
	return createAction(cartActionTypes.setCartItems, newCartItems);
};
export const clearItemFromCart = (cartItems, cartItemToClear) => {
	const newCartItems = clearCartItem(cartItems, cartItemToClear);
	return createAction(cartActionTypes.setCartItems, newCartItems);
};
