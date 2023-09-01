export type Product = {
    name: string;
    price: number;
    isAvailable: boolean;
}

// INITIAL STATE
const initialState: Product[] = [
    { name: 'Shrek', price: 10, isAvailable: true },
    { name: 'Jackass', price: 15, isAvailable: true },
    { name: 'Hercules', price: 20, isAvailable: false },
    { name: 'Mulan', price: 10, isAvailable: false },
    { name: 'Pinokio', price: 10, isAvailable: true },
]

// ACTIONS
const ADD = 'ADD';
const REMOVE = 'REMOVE';
const RENT = 'RENT';
const RETURN = 'RETURN';

type AddAction = { type: typeof ADD, payload: Product }
type RemoveAction = { type: typeof REMOVE, payload: string }
type RentAction = { type: typeof RENT, payload: string }
type ReturnAction = { type: typeof RETURN, payload: string }
type Action = AddAction | RemoveAction | RentAction | ReturnAction;

// REDUCER
export const rentalOffice = (state: Product[] = initialState, action: Action): Product[] => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        case REMOVE:
            return state.filter(product => product.name !== action.payload);
        case RENT:
            return state.map(product => product.name === action.payload
                ? ({ ...product, isAvailable: false }) : product)
        case RETURN:
            return state.map(product => product.name === action.payload
                ? ({ ...product, isAvailable: true }) : product)
        default:
            return state;
    }
}

// ACTION CREATOR
export const createAddAction = (product: Product): AddAction => ({ type: ADD, payload: product });
export const createRemoveAction = (productName: string): RemoveAction => ({ type: REMOVE, payload: productName });
export const createRentAction = (productName: string): RentAction => ({ type: RENT, payload: productName });
export const createReturnAction = (productName: string): ReturnAction => ({ type: RETURN, payload: productName });

