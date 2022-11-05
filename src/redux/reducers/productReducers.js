import ActionTypes from "../actions/ActionTypes";

const initialState = {
    products: [],
    selectedProduct: {},
    likedProducts: [],
    cartProducts: [],
    cartProductsQuantities: 0,
    checkoutProducts: [],
}

export const setProductReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: [...payload]};

        case (ActionTypes.REMOVE_SET_PRODUCTS):
            return {...state, products: []}

        default:
            return state;
    }
    
}

export const selectedProductReducer = (state = initialState, {type, payload})=> {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, selectedProduct: payload};

        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {...state, selectedProduct: {}}

        default:
            return state;
    }
}

export const setMyLikedProducts = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.LIKED_PRODUCTS:
            const alreadyLikedItems = [...state?.likedProducts];
            const newLikedItem = payload;
            const newLikedItemCopy = {...newLikedItem, liked: true}
            console.log('just liked - prods', [...alreadyLikedItems, newLikedItemCopy])
            return {...state, likedProducts: [...alreadyLikedItems, newLikedItemCopy]}

        case ActionTypes.REMOVE_LIKED_PRODUCTS: 
        const productsArray = [...state?.likedProducts];
        const productIndex = productsArray?.findIndex((product)=> product?.id === payload)
        const productToUnlike = productsArray[productIndex];
        const productToUnlikeCopy = {...productToUnlike, liked: false}
        productsArray?.splice(productIndex, 1, productToUnlikeCopy);
        productsArray?.splice(productIndex, 1);
        console.log('just unliked - prods', productsArray)
        return {...state, likedProducts: [...productsArray]}

        default:
            return state;
    }
}

// add and remove products from cart
export const cartProductsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        // add product to cart
        case ActionTypes.CART_PRODUCTS:
            // copies of checkout and cart list
            const addedToCart = [...state?.cartProducts];
            const addedToCheckout = [...state?.checkoutProducts]
            const alreadyAddedItemIndex = addedToCart?.findIndex((product)=> product?.id === payload?.id);
            const itemIndexInCheckout = addedToCheckout?.findIndex((product)=> product?.id === payload?.id);

            // if item hasn't been added before, add product to array
            if (alreadyAddedItemIndex < 0) {
                const newlyAddedProduct = {...payload, quantity: 1, checked: true}
                return {
                    ...state, cartProducts: [...addedToCart, newlyAddedProduct],
                    cartProductsQuantities: state?.cartProductsQuantities + 1,
                    checkoutProducts: [...addedToCart, newlyAddedProduct]
                }
                // if item has been added before, increment its quantity
            } else {
                const cartProductsCopy = [...addedToCart];
                // get item (to increment) from cart list & checkout list separately
                const alreadyAddedItem = cartProductsCopy[alreadyAddedItemIndex]
                const itemInCheckout = addedToCheckout[itemIndexInCheckout];
                // increment item in cart list and checkout list separately
                const incrementedItem = {...alreadyAddedItem, quantity: alreadyAddedItem?.quantity + 1}
                const incrementedCheckoutItem = {...itemInCheckout, quantity: itemInCheckout?.quantity + 1}
                // replace incremented item separately
                // doing this separately ensures that in the end, I don't mistakenly return an unchecked item...
                // from the cart into the checkout considering that the current payload is 'checked'
                cartProductsCopy?.splice(alreadyAddedItemIndex, 1, incrementedItem);
                addedToCheckout?.splice(itemIndexInCheckout, 1, incrementedCheckoutItem)

                // if item checked === true(intended to be checked out), set item into checkout list
                if (incrementedItem.checked) {
                    return {
                        ...state, cartProducts: [...cartProductsCopy], 
                        cartProductsQuantities: state?.cartProductsQuantities + 1,
                        checkoutProducts: [...addedToCheckout]
                    }
                    // if item checked !== true, don't set item into checkout list
                } else {
                    return {
                        ...state, cartProducts: [...cartProductsCopy], 
                        cartProductsQuantities: state?.cartProductsQuantities + 1,
                    }
                }
                
            }

            // remove product from cart
        case ActionTypes.REMOVE_CART_PRODUCT :
            // create copies of cart and checkout 
            const allCartItems = [...state?.cartProducts];
            const allCheckoutItems = [...state?.checkoutProducts]
            const cartItemQuantity = payload?.quantity;
            // get index of item to decrement 
            const cartItemIndex = allCartItems?.findIndex((item)=> item?.id === payload?.id);
            const checkoutItemIndex = allCheckoutItems?.findIndex((item)=> item?.id === payload?.id);
            
            // if item's quanitity is > 1, decrement it's quantity.
            // note there's no else for === 1 because this action type is only set to trigger...
            // when item's quantity is greater than 1. check cartItemInfo/Button component
            if (cartItemQuantity > 1) {
                // get item to decrement from cart & checkout lists separately
                const severallyAddedItem = allCartItems[cartItemIndex];
                const itemToReduce = allCheckoutItems[checkoutItemIndex]
                // effect decrementing in cart & checkout lists separately
                const decrementedItem = {...severallyAddedItem, quantity: severallyAddedItem?.quantity - 1};
                const reducedItem = {...itemToReduce, quantity: itemToReduce?.quantity - 1};
                // replace old item with decremented one in both lists
                allCartItems?.splice(cartItemIndex, 1, decrementedItem);
                allCheckoutItems?.splice(checkoutItemIndex, 1, reducedItem)

                // if item checked === true(intended to be checked out), set item into checkout list
                // separating the checkout list means i can remove this if/else code, but...
                // there's no way to use logic in return and if item in checkout returns...
                // an index of -1 it's going to replace checkout products with a null array
                if (decrementedItem.checked) {
                    return {
                        ...state, cartProducts: [...allCartItems], 
                        cartProductsQuantities: state?.cartProductsQuantities - 1,
                        checkoutProducts: [...allCheckoutItems]
                    }
                    // if item checked !== true, don't set item into checkout list
                } else {
                    return {
                        ...state, cartProducts: [...allCartItems], 
                        cartProductsQuantities: state?.cartProductsQuantities - 1,
                    }
                }
            }

            // delete item from cart irrespective of quantity
        case ActionTypes.DELETE_CART_PRODUCT: 
            // get copies of cart and checkout
            const currentCartProducts = [...state?.cartProducts]
            const currentCheckoutProducts = [...state?.checkoutProducts]

            // get index of item in both lists
            const productToDeleteIndex = currentCartProducts?.findIndex((item)=> item?.id === payload?.id);
            const itemToDeleteIndex = currentCheckoutProducts?.findIndex((item)=> item?.id === payload?.id);

            // get actual item in both lists
            const productToDelete = currentCartProducts[productToDeleteIndex];
            const checkoutItemToDelete = currentCheckoutProducts[itemToDeleteIndex];

            // if product exists in both checkout and cart lists
            if (productToDelete?.checked === true) {
    
                // make a copy of item to delete to set its checked to false
                const checkoutItemToDeleteCopy = {...checkoutItemToDelete, checked: false}
    
                // get quantity of product simply to reduce quantity of cart products...
                const productToDeleteQuantity = productToDelete?.quantity;
    
                // remove deleted item from both arrays
                currentCartProducts?.splice(productToDeleteIndex, 1);
                
                // for checkout, replace item to checked==false first then delete
                currentCheckoutProducts?.splice(itemToDeleteIndex, 1, checkoutItemToDeleteCopy);
                currentCheckoutProducts?.splice(itemToDeleteIndex, 1);
                return {
                    ...state, cartProducts: [...currentCartProducts],
                    cartProductsQuantities: state?.cartProductsQuantities - productToDeleteQuantity,
                    checkoutProducts: [...currentCheckoutProducts]
                }
                
            // if product exist only in cart
            } else {
                // get target product quantity
                const itemToDeleteQuantity = productToDelete?.quantity;
                // remove target product from only cart list
                currentCartProducts?.splice(productToDeleteIndex, 1);
                return {
                    ...state, cartProducts: [...currentCartProducts],
                    cartProductsQuantities: state?.cartProductsQuantities - itemToDeleteQuantity,
                }
            }

            // remove product from checkout list
        case ActionTypes.REMOVE_CHECKOUT_PRODUCT: 
            // create copies of checkout list & cart list
            const checkoutProductsCopy = [...state?.checkoutProducts];
            const cartItemsCopy = [...state?.cartProducts];
            // get the index of item (to remove) from checkout list & (to uncheck) from cart list
            const itemToRemoveIndex = checkoutProductsCopy?.findIndex((item)=> item?.id === payload?.id);
            const itemToUncheckIndex = cartItemsCopy?.findIndex((item)=> item?.id === payload?.id);
            // remove target item from checkout list
            checkoutProductsCopy?.splice(itemToRemoveIndex, 1);
            // but set target item's 'checked' roperty to false in cart list
            const itemToUncheck = cartItemsCopy[itemToUncheckIndex]
            const newUncheckedItem = {...itemToUncheck, checked: false}
            cartItemsCopy?.splice(itemToUncheckIndex, 1, newUncheckedItem);
            // return result
            console.log('after removal, checkout products', checkoutProductsCopy)
            return {
                ...state, cartProducts: [...cartItemsCopy],
                checkoutProducts: [...checkoutProductsCopy],
            }
            
            // add product to check out list
        case ActionTypes.CHECKOUT_PRODUCTS:
            // create copy of cart list
            const allCartProducts = [...state?.cartProducts];
            const itemToCheckoutIndex = allCartProducts?.findIndex((item)=> item?.id === payload?.id);
            const itemToCheckout = allCartProducts[itemToCheckoutIndex];
            // change item to checkout 'checked' property to true
            const newlyCheckedItem = {...itemToCheckout, checked: true};
            allCartProducts?.splice(itemToCheckoutIndex, 1, newlyCheckedItem)
            console.log('after addition, checkout products', [...state?.checkoutProducts, newlyCheckedItem])
            return {
                ...state, cartProducts: [...allCartProducts],
                checkoutProducts: [...state?.checkoutProducts, newlyCheckedItem],
            }

        default:
            return state;
    }
} 


