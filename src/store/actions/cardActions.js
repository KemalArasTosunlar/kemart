import { cardService } from '../../services/cardService'
import {
  SET_CARDS,
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  SET_SELECTED_CARD,
  SET_LOADING,
  SET_ERROR
} from './cardActionTypes'

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading
})

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error
})

export const setCards = (cards) => ({
  type: SET_CARDS,
  payload: cards
})

export const setSelectedCard = (card) => ({
  type: SET_SELECTED_CARD,
  payload: card
})

export const fetchCards = () => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const cards = await cardService.getCards()
    dispatch(setCards(cards))
  } catch (error) {
    dispatch(setError(error.message))
  } finally {
    dispatch(setLoading(false))
  }
}

export const addCard = (cardData) => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const newCard = await cardService.addCard(cardData)
    dispatch({
      type: ADD_CARD,
      payload: newCard
    })
    return newCard
  } catch (error) {
    dispatch(setError(error.message))
    throw error
  } finally {
    dispatch(setLoading(false))
  }
}

export const updateCard = (cardData) => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const updatedCard = await cardService.updateCard(cardData)
    dispatch({
      type: UPDATE_CARD,
      payload: updatedCard
    })
    return updatedCard
  } catch (error) {
    dispatch(setError(error.message))
    throw error
  } finally {
    dispatch(setLoading(false))
  }
}

export const deleteCard = (cardId) => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    await cardService.deleteCard(cardId)
    dispatch({
      type: DELETE_CARD,
      payload: cardId
    })
  } catch (error) {
    dispatch(setError(error.message))
    throw error
  } finally {
    dispatch(setLoading(false))
  }
}
