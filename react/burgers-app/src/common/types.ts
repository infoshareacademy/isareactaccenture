export interface BurgerData {
    name: string;
    ingredients: string;
    price: number;
    url?: string;
}

export interface Burger extends BurgerData {
    id: string;
}