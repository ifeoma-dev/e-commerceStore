import ActionTypes from "./ActionTypes"

export const setProducts = (products)=> {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const removeSetProducts = ()=> {
    return {
        type: ActionTypes.REMOVE_SET_PRODUCTS
    }
}

export const setSelectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = ()=> {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}

export const setCartProducts = (products) => {
    return {
        type: ActionTypes.CART_PRODUCTS,
        payload: products,
    }
}

export const removeCartProduct = (product) => {
    return {
        type: ActionTypes.REMOVE_CART_PRODUCT,
        payload: product,
    }
}

export const deleteCartProduct = (product) => {
    return {
        type: ActionTypes.DELETE_CART_PRODUCT,
        payload: product,
    }
}

export const setLikedProducts = (products)=> {
    return{
        type: ActionTypes.LIKED_PRODUCTS,
        payload: products,
    }
}

export const removeLikedProduct = (id) => {
    return {
        type: ActionTypes.REMOVE_LIKED_PRODUCTS,
        payload: id,
    }
}

export const setCheckoutProducts = (products)=> {
    return{
        type: ActionTypes.CHECKOUT_PRODUCTS,
        payload: products,
    }
}

export const removeCheckoutProduct = (product) => {
    return {
        type: ActionTypes.REMOVE_CHECKOUT_PRODUCT,
        payload: product,
    }
}