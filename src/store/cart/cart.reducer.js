import cartActionTypes from './cart.types';

const cartDefaultState = {
	cartItems: [],
	isCartOpen: false
};

const cartReducer = (state = cartDefaultState, action) => {
	const { type, payload } = action;

	switch (type) {
		case cartActionTypes.setCartItems:
			return {
				...state,
				cartItems: payload
			};

		case cartActionTypes.setIsCartOpen:
			return {
				...state,
				isCartOpen: payload
			};

		default:
			return state;
	}
};

export default cartReducer;
