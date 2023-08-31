import { createStore, combineReducers } from "redux";
import { counter } from "./state/counter";
import { rentalOffice, Product } from "./state/rental-office";
import { shopCart, ShopProduct } from "./state/shop-cart";

export type State = {
    counter: number;
    rentalOffice: Product[];
    shopCart: ShopProduct[];
}

const reducers = combineReducers({
    counter,
    rentalOffice,
    shopCart
})

export const store = createStore(reducers,
    // @ts-expect-error
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())