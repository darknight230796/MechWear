import Axios from 'axios';
import { BACKEND_URL } from '../constants/backendURL';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from "../constants/cartConstants";
//
export const addToCart = (productID,qty) => async(dispatch, getState) =>{
    const {data} = await Axios.get(`${BACKEND_URL}api/products/${productID}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            image:data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            qty,
        }
    });
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (productId) => (dispatch,getState)=>{
    dispatch({
        type:CART_REMOVE_ITEM,
        payload:productId
    });
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) =>{
    dispatch({type: CART_SAVE_SHIPPING_ADDRESS,payload:data});
    localStorage.setItem('shippingAddress',JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) =>{
    dispatch({type: CART_SAVE_PAYMENT_METHOD,payload:data});
};