
const DEPOSIT = 'DEPOSIT';
const WITHDRAW = 'WITHDRAW';
const WITHDRAW_ALL = 'WITHDRAW_ALL';
const BALANCE = 'BALANCE';

const bankReducer = (state: any = 1000, action: any) => {
    switch(action.type) {
        case DEPOSIT:
            return state + action.payload
        case WITHDRAW:
            if (action.payload >= 1000) {
                console.warn('Limit wypłat to tysiąc!')
                return state;
            }

            if (action.payload > state) {
                console.error('Nie masz tyle pieniędzy, biedaku!');
                return state;
            }

            return state - action.payload
        case WITHDRAW_ALL:
            console.log('Wypłaciłeś: ' + state);
            return 0
        case BALANCE:
            console.log('Twój stan konta to: ' + state);
            return state;
        default:
            return state;
    }
}

const createDepositAction = (value: number) => ({ type: DEPOSIT, payload: value });
const createWithdrawAction = (value: number) => ({ type: WITHDRAW, payload: value });
const createWithdrawAllAction = () => ({ type: WITHDRAW_ALL });
const createBalanceAction = () => ({ type: BALANCE });

// @ts-expect-error
const store = createStore(bankReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// @ts-expect-error
window.store = store;
window.createDepositAction = createDepositAction;
window.createWithdrawAction = createWithdrawAction;
window.createWithdrawAllAction = createWithdrawAllAction;
window.createBalanceAction = createBalanceAction;