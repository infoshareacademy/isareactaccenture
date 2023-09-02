import { Button, ButtonGroup, Icon, Typography, CircularProgress } from "@mui/material";
import { createIncrementAction, createDecrementAction, createResetAction, 
    createAsyncIncrementAction, createAsyncResetAction, createAsyncDecrementAction,
    createSagaIncrement, createSagaDecrement
 } from "../../state/counter";
import { State } from "../../store";
import { useAppDispatch, useAppSelector } from "../../hooks";

export const Counter = () => {
    const { value, isLoading } = useAppSelector((state: State) => state.counter);
    const dispatch = useAppDispatch();

    const increment = () => {
        dispatch(createIncrementAction())
    }
    const asyncIncrement = () => {
        dispatch(createAsyncIncrementAction())
    }
    const sagaIncrement = () => {
        dispatch(createSagaIncrement())
    }
    const reset = () => {
        dispatch(createResetAction())
    }
    const asyncReset = () => {
        dispatch(createAsyncResetAction())
    }
    const decrement = () => {
        dispatch(createDecrementAction())
    }
    const asyncDecrement = () => {
        dispatch(createAsyncDecrementAction())
    }
    const sagaDecrement = () => {
        dispatch(createSagaDecrement())
    }

    return <>
        <Typography variant="h2">Counter</Typography>
        <Typography variant="h3">{isLoading ? <CircularProgress /> : value}</Typography>
        <ButtonGroup>
            <Button variant="contained" onClick={increment}>
                <Icon>add</Icon>
            </Button>
            <Button variant="contained" color="secondary" onClick={reset}>
                <Icon>restart_alt</Icon>
            </Button>
            <Button variant="contained" color="error" onClick={decrement}>
                <Icon>remove</Icon>
            </Button>
        </ButtonGroup>
        <ButtonGroup sx={{ marginTop: '15px'}}>
            <Button variant="contained" color="success" onClick={asyncIncrement}>
                <Icon>update</Icon>
            </Button>
            <Button variant="contained" color="info" onClick={asyncReset}>
                <Icon>hourglass_empty</Icon>
            </Button>
            <Button variant="contained" color="warning" onClick={asyncDecrement}>
                <Icon>history</Icon>
            </Button>
        </ButtonGroup>
        <ButtonGroup sx={{ marginTop: '15px'}}>
            <Button variant="contained" color="info" onClick={sagaIncrement}>
                <Icon>auto_stories</Icon>
            </Button>
            <Button variant="contained" color="error" onClick={sagaDecrement}>
                <Icon>book</Icon>
            </Button>
        </ButtonGroup>
    </>
}