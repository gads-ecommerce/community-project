import { useEffect, useReducer } from 'react';
import { appReducer } from './appReducer';
import * as types from './constants/AppTypes';

export const useApp = () => {
  const [{ cart, disable, count, totalSum, totalItem }, dispatch] = useReducer(appReducer, {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    disable: false,
    count: 0,
    totalSum: 0,
    totalItem: 0,
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));

    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price);
    }, 0);

    let newItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount);
    }, 0);

    dispatch({
      type: types.TOTAL_SUM,
      payload: newTotal,
    });

    dispatch({
      type: types.TOTAL_ITEM,
      payload: newItems,
    });
  }, [cart]);

  const addToCart = (param) => {
    dispatch({
      type: types.ADD_TO_CART,
      payload: param,
    });
  };

  const increment = (id) => {
    dispatch({
      type: types.INCREMENT,
      payload: id,
    });
  };

  const decrement = (id, amount) => {
    dispatch({
      type: types.DECREMENT,
      payload: { id, amount },
    });
  };

  const removeFromCart = (product) => {
    dispatch({
      type: types.REMOVE_FROM_CART,
      payload: product,
    });
  };

  return { cart, addToCart, disable, count, increment, decrement, removeFromCart, totalSum, totalItem };
};
