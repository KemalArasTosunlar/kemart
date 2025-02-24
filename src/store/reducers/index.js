import { combineReducers } from 'redux'
import { addressReducer } from './addressReducer'
import { authReducer } from './authReducer'
import { shoppingCartReducer } from './shoppingCartReducer'

export const rootReducer = combineReducers({
  address: addressReducer,
  auth: authReducer,
  shoppingCart: shoppingCartReducer
})
