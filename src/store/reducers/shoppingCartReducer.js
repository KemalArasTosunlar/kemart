const initialState = {
    cart: []
}

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const existingItem = state.cart.find(item => item.product.id === action.payload.product.id)
            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.product.id === action.payload.product.id
                            ? { ...item, count: item.count + 1 }
                            : item
                    )
                }
            }
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(item => item.product.id !== action.payload)
            }
        case "UPDATE_CART_ITEM":
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.product.id === action.payload.id) {
                        const updates = action.payload.updates
                        const processedUpdates = Object.fromEntries(
                            Object.entries(updates).map(([key, value]) => [
                                key,
                                typeof value === 'function' ? value(item[key]) : value
                            ])
                        )
                        // If count becomes 0 or negative, remove the item
                        if ('count' in processedUpdates && processedUpdates.count <= 0) {
                            return null
                        }
                        return {
                            ...item,
                            ...processedUpdates
                        }
                    }
                    return item
                }).filter(Boolean) // Remove null items (those with count <= 0)
            }
        default:
            return state
    }
}

export default shoppingCartReducer
