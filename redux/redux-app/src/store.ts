import { configureStore } from "@reduxjs/toolkit";
import { counter, Counter } from "./state/counter";
import { Product } from "./state/rental-office";
import rentalOfficeReducer from "./state/rental-office/index-toolkit";
import { shopCart, ShopProduct } from "./state/shop-cart";

export type State = {
    counter: Counter;
    rentalOffice: Product[];
    shopCart: ShopProduct[];
}

export const store = configureStore({
    reducer: {
        counter,
        rentalOffice: rentalOfficeReducer,
        // @ts-expect-error
        shopCart
    }
})