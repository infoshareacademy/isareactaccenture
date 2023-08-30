import { createStore } from "redux";
import { counter } from "./state/counter";

export const store = createStore(counter,
    // @ts-expect-error
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())