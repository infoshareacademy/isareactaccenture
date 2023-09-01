import { takeEvery, put, all } from 'redux-saga/effects';
import { SAGA_INCREMENT, SAGA_DECREMENT, START_LOADING, createIncrementAction, createDecrementAction } from '../state/counter';

function* increment() {
    yield put({ type: START_LOADING })
    yield new Promise<void>((resolve) => { setTimeout(() => resolve(), 1500) })
    yield put(createIncrementAction(10))
}

function* incrementCounterAsync() {
    yield takeEvery(SAGA_INCREMENT, increment)
}
function* decrement() {
    yield put({ type: START_LOADING })
    yield new Promise<void>((resolve) => { setTimeout(() => resolve(), 1500) })
    yield put(createDecrementAction(10))
}

function* decrementCounterAsync() {
    yield takeEvery(SAGA_DECREMENT, decrement)
}

export default function* rootSafa() {
    yield all([
        incrementCounterAsync(),
        decrementCounterAsync()
    ])
};