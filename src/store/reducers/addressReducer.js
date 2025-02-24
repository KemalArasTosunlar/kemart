import {
  SET_ADDRESSES,
  ADD_ADDRESS,
  UPDATE_ADDRESS,
  DELETE_ADDRESS,
  SET_SELECTED_ADDRESSES,
  SET_LOADING,
  SET_ERROR
} from '../actions/addressActions'

const initialState = {
  addresses: [],
  selectedAddresses: {
    shipping: null,
    billing: null,
    sameAsShipping: true
  },
  loading: false,
  error: null
}

export const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADDRESSES:
      return {
        ...state,
        addresses: action.payload,
        loading: false,
        error: null
      }
    case ADD_ADDRESS:
      return {
        ...state,
        addresses: [...state.addresses, action.payload],
        loading: false,
        error: null
      }
    case UPDATE_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.map(address =>
          address.id === action.payload.id ? action.payload : address
        ),
        loading: false,
        error: null
      }
    case DELETE_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.filter(address => address.id !== action.payload),
        loading: false,
        error: null
      }
    case SET_SELECTED_ADDRESSES:
      return {
        ...state,
        selectedAddresses: action.payload,
        error: null
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}
