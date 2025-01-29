import { ADD_TO_CART, EMPTY_QTY, REMOVE_FROM_CART, UPDATE_QTY } from "../const/CartConstant";

const cart = localStorage.getItem("cart");

let initialState;

if (!cart) {
    initialState = { cartItems: [] }
} else {
    initialState = JSON.parse(cart);
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newCart = {
                cartItems : [...state.cartItems, action.payload]
            };

            localStorage.setItem("cart", JSON.stringify(newCart));
            return newCart;

        case REMOVE_FROM_CART:
            return;

        case UPDATE_QTY:
            return;

        case EMPTY_QTY:
            return;

        default:
            return state;
    }
}

export default CartReducer;