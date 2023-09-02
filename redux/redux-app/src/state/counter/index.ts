import { AppDispatch } from "../../store";

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
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const START_LOADING = 'START_LOADING';
export const SAGA_INCREMENT = 'SAGA_INCREMENT';
export const SAGA_DECREMENT = 'SAGA_DECREMENT';

export type Action = {
    type: typeof INCREMENT | typeof DECREMENT | typeof RESET
    | typeof START_LOADING | typeof SAGA_DECREMENT | typeof SAGA_INCREMENT, payload?: number
}

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
    return (dispatch: AppDispatch) => {
        dispatch(createStartLoadingAction());
        setTimeout(() => dispatch(createIncrementAction(5)), 2000)
    }
}
export const createAsyncDecrementAction = () => {
    return (dispatch: AppDispatch) => {
        dispatch(createStartLoadingAction());
        setTimeout(() => dispatch(createDecrementAction(5)), 2000)
    }
}
export const createAsyncResetAction = () => {
    return (dispatch: AppDispatch) => {
        dispatch(createStartLoadingAction());
        setTimeout(() => dispatch(createResetAction()), 2000)
    }
}
export const createSagaIncrement = (): Action => ({ type: SAGA_INCREMENT })
export const createSagaDecrement = (): Action => ({ type: SAGA_DECREMENT })
