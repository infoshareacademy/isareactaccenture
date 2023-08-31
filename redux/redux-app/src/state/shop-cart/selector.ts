import { createSelector } from "reselect";
import { State } from "../../store";
import { ShopProduct } from ".";

export const shopCartSeletor = (state: State) => state.shopCart;

export const isProductInCartSelector = (product: ShopProduct) => createSelector(
    shopCartSeletor,
    (productsInCart) => productsInCart.map(p => p.id).includes(product.id)
);

export const totalValueSelector = createSelector(
    shopCartSeletor,
    (productsInCart) => productsInCart.map(p => p.price).reduce((acc, curr) => acc + curr, 0)
);

export const shopCartLengthSeletor = createSelector(
    shopCartSeletor,
    (productsInCart) => productsInCart.length
);
