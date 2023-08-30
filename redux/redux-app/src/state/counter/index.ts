// ACTIONS
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

type Action = { type: typeof INCREMENT | typeof DECREMENT | typeof RESET }

// REDUCER
export const counter = (state: number = 0, action: Action): number => {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        case RESET:
            return 0
        default:
            return state;
    }
}

// ACTION CREATOR
export const createIncrementAction = (): Action => ({ type: INCREMENT })
export const createDecrementAction = (): Action => ({ type: DECREMENT })
export const createResetAction = (): Action => ({ type: RESET })
