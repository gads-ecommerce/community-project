import * as types from './constants/AppTypes';

export const appReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_TO_CART:
      const item = [...state.cart].find((item) => item.id === payload.id);
      if (item) {
        const newCart = [...state.cart].map((item) => {
          return item.id === payload.id ? { ...item, amount: item.amount + 1 } : { ...item };
        });

        return {
          ...state,
          cart: newCart,
        };
      } else {
        const ec = [...state.cart];

        ec.push({ ...payload, count: 1, amount: 1 });

        return {
          ...state,
          cart: ec,
        };
      }

    case types.INCREMENT:
      const newCart = [...state.cart].map((item) => {
        return item.id === payload ? { ...item, amount: item.amount + 1 } : { ...item };
      });
      let totalItems = [...state.cart].reduce((total, cartItem) => {
        return (total += cartItem.amount);
      }, 0);
      return {
        ...state,
        cart: newCart,
        totalItems: totalItems + 1,
      };
    // return {
    //     ...state,
    //     count:  1
    // }

    case types.DECREMENT:
      if (payload.amount === 1) {
        return {
          ...state,
          cart: [...state.cart].filter((item) => item.id !== payload.id),
        };
      } else {
        const newCart = [...state.cart].map((item) => {
          return item.id === payload.id ? { ...item, amount: item.amount - 1 } : { ...item };
        });
        let totalItems = [...state.cart].reduce((total, cartItem) => {
          return (total += cartItem.amount);
        }, 0);

        return {
          ...state,
          cart: newCart,
          totalItems: totalItems - 1,
        };
      }

    case types.REMOVE_FROM_CART:
      const oc = [...state.cart];
      return {
        ...state,
        cart: oc.filter((item) => item.id !== payload),
      };

    case types.TOTAL_SUM:
      return {
        ...state,
        totalSum: payload,
      };

    case types.TOTAL_ITEM:
      return {
        ...state,
        totalItem: payload,
      };

    default:
      return state;
  }
};
