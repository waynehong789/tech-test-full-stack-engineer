import axios from 'axios';

const apiUrl = `http://localhost:5000/api/spaceShips`;

export const getSpaceShips = async (params) => {
    return await axios.get(apiUrl, {params});
}