export const addToCart = (product) => ({
    type: "ADD_TO_CART",
    payload: {
        count: 1,
        checked: true,
        product
    }
})

export const removeFromCart = (productId) => ({
    type: "REMOVE_FROM_CART", 
    payload: productId
})

export const updateCartItem = (id, updates) => ({
    type: "UPDATE_CART_ITEM",
    payload: {
        id,
        updates
    }
})

export const increaseCount = (productId) => ({
    type: "UPDATE_CART_ITEM",
    payload: {
        id: productId,
        updates: { count: (currentCount) => currentCount + 1 }
    }
})

export const decreaseCount = (productId) => ({
    type: "UPDATE_CART_ITEM",
    payload: {
        id: productId,
        updates: { count: (currentCount) => Math.max(1, currentCount - 1) }
    }
})

export const toggleItemSelection = (productId) => ({
    type: "UPDATE_CART_ITEM",
    payload: {
        id: productId,
        updates: { checked: (currentChecked) => !currentChecked }
    }
})

export const resetCart = () => ({
    type: "RESET_CART"
})
