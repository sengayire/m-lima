import { getShoppingCartItems } from '../../actionsTypes';

export default (state, { type, payload }) => {
  console.log('payload start', payload);

  switch (type) {
    case getShoppingCartItems.GET_SHOPPING_CART_ITEMS_START:
      return {
        ...state,
        message: '',
        loading: true,
        errors: {},
      };
    case getShoppingCartItems.GET_SHOPPING_CART_ITEMS_END:
      return {
        ...state,
        loading: false,
      };
    case getShoppingCartItems.GET_SHOPPING_CART_ITEMS_SUCCESS:
      return {
        ...state,
        items: payload,
      };
    case getShoppingCartItems.GET_SHOPPING_CART_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        message: payload.message,
        errors: {
          ...payload.errors,
        },
      };
    default:
      return null;
  }
};
