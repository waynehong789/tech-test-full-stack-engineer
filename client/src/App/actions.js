import store from '../redux';
import { getSpaceShips } from './api';

export const SPACE_SHIP_REQUEST = "SPACE_SHIP_REQUEST";
export const SPACE_SHIP_REQUEST_SUCCESS = "SPACE_SHIP_REQUEST_SUCCESS";
export const SPACE_SHIP_REQUEST_FAILED = "SPACE_SHIP_REQUEST_FAILED";

export const spaceShipsQuery = async (params) => {
    store.dispatch({ type: SPACE_SHIP_REQUEST})
    getSpaceShips(params).then(response => {
        store.dispatch({ type: SPACE_SHIP_REQUEST_SUCCESS, payload: response.data })
    }).catch( error => {
        console.log(SPACE_SHIP_REQUEST_FAILED, error)
        store.dispatch({ type: SPACE_SHIP_REQUEST_FAILED})
    })
}