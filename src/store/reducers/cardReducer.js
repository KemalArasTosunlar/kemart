import {
  SET_CARDS,
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  SET_SELECTED_CARD,
  SET_LOADING,
  SET_ERROR
} from '../actions/cardActionTypes'

const initialState = {
  cards: [],
  selectedCard: null,
  loading: false,
  error: null
}

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }

    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      }

    case SET_CARDS:
      return {
        ...state,
        cards: action.payload
      }

    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload]
      }

    case UPDATE_CARD:
      return {
        ...state,
        cards: state.cards.map(card =>
          card.id === action.payload.id ? action.payload : card
        ),
        selectedCard: state.selectedCard?.id === action.payload.id
          ? action.payload
          : state.selectedCard
      }

    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter(card => card.id !== action.payload),
        selectedCard: state.selectedCard?.id === action.payload
          ? null
          : state.selectedCard
      }

    case SET_SELECTED_CARD:
      return {
        ...state,
        selectedCard: action.payload
      }

    default:
      return state
  }
}
