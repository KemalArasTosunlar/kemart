import { api } from '../api/api'

const getAddresses = async () => {
  const response = await api.get('/user/address')
  return response.data
}

const addAddress = async (addressData) => {
  const response = await api.post('/user/address', addressData)
  return response.data
}

const updateAddress = async (addressData) => {
  const response = await api.put('/user/address', addressData)
  return response.data
}

const deleteAddress = async (addressId) => {
  const response = await api.delete(`/user/address/${addressId}`)
  return response.data
}

export const addressService = {
  getAddresses,
  addAddress,
  updateAddress,
  deleteAddress
}
