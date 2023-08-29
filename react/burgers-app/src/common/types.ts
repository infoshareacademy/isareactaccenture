export interface BurgerData {
    name: string;
    ingredients: string;
    price: string;
    url?: string;
}

export interface Burger extends BurgerData {
    id: string;
}