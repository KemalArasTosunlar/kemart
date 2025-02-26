import { api } from '../api/api'

const getCards = async () => {
  const response = await api.get('/user/card')
  return response.data
}

const addCard = async (cardData) => {
  const response = await api.post('/user/card', cardData)
  return response.data
}

const updateCard = async (cardData) => {
  const response = await api.put('/user/card', cardData)
  return response.data
}

const deleteCard = async (cardId) => {
  const response = await api.delete(`/user/card/${cardId}`)
  return response.data
}

export const cardService = {
  getCards,
  addCard,
  updateCard,
  deleteCard
}
