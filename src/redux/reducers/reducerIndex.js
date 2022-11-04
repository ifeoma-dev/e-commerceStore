import { combineReducers } from "redux";
import { setProductReducer, selectedProductReducer, setMyLikedProducts, cartProductsReducer, } from "./productReducers";

const reducers = combineReducers({
    allProducts: setProductReducer,
    selectedProduct: selectedProductReducer,
    allLikedProducts: setMyLikedProducts,
    allCartProducts: cartProductsReducer,
})

export default reducers;