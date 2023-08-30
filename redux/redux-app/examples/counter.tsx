// ACTIONS
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// REDUCER
const counterReducer = (state: any = 0, action: any) => {
    switch(action.type) {
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
const createIncrementAction = () => {
    return {
        type: INCREMENT
    }
}
const createDecrementAction = () => ({ type: DECREMENT })
const createResetAction = () => ({ type: RESET })




// NA POTRZEBY ZAJEC

const store = createStore(counterReducer);

// @ts-expect-error
window.store = store;