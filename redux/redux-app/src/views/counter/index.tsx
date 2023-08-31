import { Button, ButtonGroup, Icon, Typography, CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { createIncrementAction, createDecrementAction, createResetAction, 
    createAsyncIncrementAction, createAsyncResetAction, createAsyncDecrementAction } from "../../state/counter";
import { State } from "../../store";

export const Counter = () => {
    const { value, isLoading } = useSelector((state: State) => state.counter);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(createIncrementAction())
    }
    const asyncIncrement = () => {
        // @ts-expect-error
        dispatch(createAsyncIncrementAction())
    }
    const reset = () => {
        dispatch(createResetAction())
    }
    const asyncReset = () => {
        // @ts-expect-error
        dispatch(createAsyncResetAction())
    }
    const decrement = () => {
        dispatch(createDecrementAction())
    }
    const asyncDecrement = () => {
        // @ts-expect-error
        dispatch(createAsyncDecrementAction())
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
    </>
}