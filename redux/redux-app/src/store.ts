import { configureStore } from "@reduxjs/toolkit";
import { counter } from "./state/counter";
import rentalOfficeReducer from "./state/rental-office/index-toolkit";
import { shopCart } from "./state/shop-cart";
import createSagaMiddleware from 'redux-saga';
import saga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        counter,
        rentalOffice: rentalOfficeReducer,
        shopCart
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(saga);

export type AppDispatch = typeof store.dispatch
export type State = ReturnType<typeof store.getState>

