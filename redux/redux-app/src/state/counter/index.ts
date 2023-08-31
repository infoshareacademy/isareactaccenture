import { Dispatch } from "redux";

export type Counter = {
    value: number,
    isLoading: boolean
}

// INITIAL STATE
const initialState: Counter = {
    value: 0,
    isLoading: false
}

// ACTIONS
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const START_LOADING = 'START_LOADING';

type Action = { type: typeof INCREMENT | typeof DECREMENT | typeof RESET | typeof START_LOADING, payload?: number }

// REDUCER
export const counter = (state: Counter = initialState, action: Action): Counter => {
    switch (action.type) {
        case INCREMENT:
            return {
                value: state.value + (action.payload || 1),
                isLoading: false
            }
        case DECREMENT:
            return {
                value: state.value - (action.payload || 1),
                isLoading: false
            }
        case RESET:
            return {
                value: 0,
                isLoading: false
            }
        case START_LOADING:
            return {
                value: state.value,
                isLoading: true
            }
        default:
            return state;
    }
}

// ACTION CREATOR
export const createIncrementAction = (value?: number): Action => ({ type: INCREMENT, payload: value })
export const createDecrementAction = (value?: number): Action => ({ type: DECREMENT, payload: value })
export const createResetAction = (): Action => ({ type: RESET })
export const createStartLoadingAction = (): Action => ({ type: START_LOADING })
export const createAsyncIncrementAction = () => {
    return (dispatch: Dispatch) => {
        dispatch(createStartLoadingAction());
        setTimeout(() => dispatch(createIncrementAction(5)), 2000)
    }
}
export const createAsyncDecrementAction = () => {
    return (dispatch: Dispatch) => {
        dispatch(createStartLoadingAction());
        setTimeout(() => dispatch(createDecrementAction(5)), 2000)
    }
}
export const createAsyncResetAction = () => {
    return (dispatch: Dispatch) => {
        dispatch(createStartLoadingAction());
        setTimeout(() => dispatch(createResetAction()), 2000)
    }
}
