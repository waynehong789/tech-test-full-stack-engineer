import { createStore, combineReducers, compose } from 'redux';
import {SPACE_SHIP_REQUEST, SPACE_SHIP_REQUEST_SUCCESS, SPACE_SHIP_REQUEST_FAILED} from '../App/actions'

const { NODE_ENV } = process.env;
const isDevelopment = NODE_ENV === 'development';

const reducers = {
    spaceData: (oldState = {spaceShips: [], loading: false}, action) => {
        const { type } = action;
        switch (type) {
            case SPACE_SHIP_REQUEST:
                return {...oldState, loading: true}
            case SPACE_SHIP_REQUEST_SUCCESS:
                return {...oldState, spaceShips: action.payload, loading: false}
            case SPACE_SHIP_REQUEST_FAILED:
                return {...oldState, loading: false}
            default:
                return oldState;
        }
    },
};

const slices = combineReducers({ ...reducers });

const  composeEnhancers = isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })
    : compose;


const store = createStore(
    slices,
    composeEnhancers(),
);

export default store;
