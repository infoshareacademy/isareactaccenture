import { createReducer } from "@reduxjs/toolkit";

export type ShopProduct = {
    id: number,
    name: string,
    price: number,
    url: string
}

// ACTION
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

type AddToCartAction = { type: typeof ADD_TO_CART, payload: ShopProduct };
type RemoveFromCartAction = { type: typeof REMOVE_FROM_CART, payload: number };
export type Action = AddToCartAction | RemoveFromCartAction;

// REDUCER
export const shopCart = createReducer<ShopProduct[]>([], (builder) => {
    builder
        .addCase('ADD_TO_CART', (state, action: AddToCartAction) => {
            return [...state, action.payload]
        })
        .addCase('REMOVE_FROM_CART', (state, action: RemoveFromCartAction) => {
            return state.filter(product => product.id !== action.payload);
        })
});

// ACTION CREATORS
export const createAddToCartAction = (product: ShopProduct): AddToCartAction =>
    ({ type: ADD_TO_CART, payload: product });
export const createRemoveFromCartAction = (productId: number): RemoveFromCartAction =>
    ({ type: REMOVE_FROM_CART, payload: productId });