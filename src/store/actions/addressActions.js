import { addressService } from '../../services/addressService'

export const SET_ADDRESSES = 'SET_ADDRESSES'
export const ADD_ADDRESS = 'ADD_ADDRESS'
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
export const DELETE_ADDRESS = 'DELETE_ADDRESS'
export const SET_SELECTED_ADDRESSES = 'SET_SELECTED_ADDRESSES'
export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'

export const fetchAddresses = () => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const addresses = await addressService.getAddresses()
    dispatch({ type: SET_ADDRESSES, payload: addresses })
  } catch (error) {
    dispatch(setError(error.message))
  } finally {
    dispatch(setLoading(false))
  }
}

export const addNewAddress = (addressData) => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const newAddress = await addressService.addAddress(addressData)
    dispatch({ type: ADD_ADDRESS, payload: newAddress })
    return newAddress
  } catch (error) {
    dispatch(setError(error.message))
    throw error
  } finally {
    dispatch(setLoading(false))
  }
}

export const updateExistingAddress = (addressData) => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const updatedAddress = await addressService.updateAddress(addressData)
    dispatch({ type: UPDATE_ADDRESS, payload: updatedAddress })
    return updatedAddress
  } catch (error) {
    dispatch(setError(error.message))
    throw error
  } finally {
    dispatch(setLoading(false))
  }
}

export const deleteExistingAddress = (addressId) => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    await addressService.deleteAddress(addressId)
    dispatch({ type: DELETE_ADDRESS, payload: addressId })
  } catch (error) {
    dispatch(setError(error.message))
    throw error
  } finally {
    dispatch(setLoading(false))
  }
}

export const setSelectedAddresses = (addresses) => ({
  type: SET_SELECTED_ADDRESSES,
  payload: addresses
})

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading
})

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error
})
