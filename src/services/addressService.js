import { api } from '../api/api'

const getAddresses = async () => {
  try {
    const response = await api.get('/user/address')
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch addresses: ' + error.message)
  }
}


const addAddress = async (addressData) => {
  try {
    const response = await api.post('/user/address', addressData)
    return response.data
  } catch (error) {
    throw new Error('Failed to add address: ' + error.message)
  }
}


const updateAddress = async (addressData) => {
  try {
    const response = await api.put('/user/address', addressData)
    return response.data
  } catch (error) {
    throw new Error('Failed to update address: ' + error.message)
  }
}


const deleteAddress = async (addressId) => {
  try {
    const response = await api.delete(`/user/address/${addressId}`)
    return response.data
  } catch (error) {
    throw new Error('Failed to delete address: ' + error.message)
  }
}


export const addressService = {
  getAddresses,
  addAddress,
  updateAddress,
  deleteAddress
}
