const initialState = {
  selectedAddress: null,
  selectedCard: null,
  cartItems: [],
  loading: false,
  error: null
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_ADDRESS':
      return {
        ...state,
        selectedAddress: action.payload
      };
    case 'SET_SELECTED_CARD':
      return {
        ...state,
        selectedCard: action.payload
      };
    case 'SET_CART_ITEMS':
      return {
        ...state,
        cartItems: action.payload
      };
    case 'CREATE_ORDER_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'CREATE_ORDER_SUCCESS':
      return {
        ...state,
        loading: false,
        selectedAddress: null,
        selectedCard: null,
        cartItems: []
      };
    case 'CREATE_ORDER_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default orderReducer;
