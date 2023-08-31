import { Button, ButtonGroup, Icon, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { createIncrementAction, createDecrementAction, createResetAction } from "../../state/counter";
import { State } from "../../store";

export const Counter = () => {
    const value = useSelector((state: State) => state.counter);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(createIncrementAction())
    }
    const reset = () => {
        dispatch(createResetAction())
    }
    const decrement = () => {
        dispatch(createDecrementAction())
    }

    return <>
        <Typography variant="h2">Counter</Typography>
        <Typography variant="h3">{value}</Typography>
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
    </>
}