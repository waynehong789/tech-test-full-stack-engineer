import axios from 'axios';
import { GetAllShipsQuery } from '../application/queries/getAllShipsQuery';

const apiUrl = `https://api.spacexdata.com/v3/ships`;

export const getSpaceShips = async (params?: GetAllShipsQuery) => {
    return await axios.get(apiUrl, {params});
}