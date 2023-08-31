import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { counter } from "./state/counter";
import { rentalOffice, Product } from "./state/rental-office";
import { shopCart, ShopProduct } from "./state/shop-cart";

export type State = {
    counter: number;
    rentalOffice: Product[];
    shopCart: ShopProduct[];
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    counter,
    rentalOffice,
    shopCart
})

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))