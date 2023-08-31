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

// REDUCER
export const rentalOffice = (state: Product[] = initialState, action: any): any => {
    switch (action.type) {
        default:
            return state;
    }
}

// ACTION CREATOR

