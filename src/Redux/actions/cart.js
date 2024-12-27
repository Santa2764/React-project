export const addItem = (item) => ({
    type: "ADD_ITEM",
    payload: item,
})

export const removeItem = (id) => ({
    type: "REMOVE_ITEM",
    payload: id
})

export const emptyCart = (id) => ({
    type: "EMPTY_CART",
    payload: id
})

export const setAmount = (infoObj) => ({
    type: "SET_AMOUNT",
    payload: infoObj
})