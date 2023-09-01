import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "./index";

const initialState: Product[] = [
    { name: 'Shrek', price: 10, isAvailable: true },
    { name: 'Jackass', price: 15, isAvailable: true },
    { name: 'Hercules', price: 20, isAvailable: false },
    { name: 'Mulan', price: 10, isAvailable: false },
    { name: 'Pinokio', price: 10, isAvailable: true },
]

const rentalOfficeSlice = createSlice({
    name: 'rentalOffice',
    initialState,
    reducers: {
        add(state, action: PayloadAction<Product>) {
            return [...state, action.payload];
        },
        remove(state, action: PayloadAction<string>) {
            return state.filter(product => product.name !== action.payload)
        },
        rent(state, action: PayloadAction<string>) {
            return state.map(product => product.name === action.payload
                ? ({ ...product, isAvailable: false })
                : product)
        },
        giveBack(state, action: PayloadAction<string>) {
            return state.map(product => product.name === action.payload
                ? ({ ...product, isAvailable: true })
                : product)
        },
    },
});

export const { add, remove, rent, giveBack } = rentalOfficeSlice.actions
export default rentalOfficeSlice.reducer;