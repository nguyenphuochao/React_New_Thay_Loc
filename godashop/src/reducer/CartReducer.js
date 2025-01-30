import { ADD_TO_CART, EMPTY_QTY, REMOVE_FROM_CART, UPDATE_QTY } from "../const/CartConstant";
import { pre_add_to_cart, pre_remove_from_cart, pre_update_cart } from "../helper/util";

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
            {
                const newCart = {
                    cartItems: pre_add_to_cart(state.cartItems, action.payload)
                };

                localStorage.setItem("cart", JSON.stringify(newCart));
                return newCart;
            }

        case REMOVE_FROM_CART:
            {
                const newCart = {
                    cartItems: pre_remove_from_cart(state.cartItems, action.payload.id)
                };

                localStorage.setItem("cart", JSON.stringify(newCart));
                return newCart;
            }

        case UPDATE_QTY:
            {
                const newCart = {
                    cartItems: pre_update_cart(state.cartItems, action.payload)
                };

                localStorage.setItem("cart", JSON.stringify(newCart));
                return newCart;
            }

        case EMPTY_QTY:
            return;

        default:
            return state;
    }
}

export default CartReducer;