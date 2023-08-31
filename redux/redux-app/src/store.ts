import { createStore, combineReducers } from "redux";
import { counter } from "./state/counter";
import { rentalOffice, Product } from "./state/rental-office";

export type State = {
    counter: number;
    rentalOffice: Product[]
}

const reducers = combineReducers({
    counter,
    rentalOffice
})

export const store = createStore(reducers,
    // @ts-expect-error
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())