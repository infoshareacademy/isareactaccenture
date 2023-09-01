import { configureStore } from "@reduxjs/toolkit";
import { counter, Counter } from "./state/counter";
import { Product } from "./state/rental-office";
import rentalOfficeReducer from "./state/rental-office/index-toolkit";
import { shopCart, ShopProduct } from "./state/shop-cart";
import createSagaMiddleware from 'redux-saga';
import saga from "./sagas";

export type State = {
    counter: Counter;
    rentalOffice: Product[];
    shopCart: ShopProduct[];
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        counter,
        rentalOffice: rentalOfficeReducer,
        // @ts-expect-error
        shopCart
    },
    // @ts-expect-error
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware]
})

sagaMiddleware.run(saga);