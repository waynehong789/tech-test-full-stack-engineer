import { getSpaceShips } from '../infrastructure/spaceX.API';
import { GetAllShipsQuery } from "../application/queries/getAllShipsQuery";
import GetAllShipsQueryHandler from '../application/queries/getAllShipsQueryHandler';
import ShipRepository from "../infrastructure/ship.repository";

const mockGetAllShips = jest.fn();
jest.mock('../infrastructure/ship.repository', () => {
    return jest.fn().mockImplementation(() => {
      return {all: mockGetAllShips};
    });
  });

const mockGetSpaceShipsFromSpaceX = jest.fn();
jest.mock('../infrastructure/spaceX.API', () => ({
    getSpaceShips() {
      return mockGetSpaceShipsFromSpaceX();
    },
  }));

const mockdata = [
    {
        ship_id: "AMERICANCHAMPION",
        ship_name: "American Champion",
        ship_type: "Tug",
        class: 7604342,
        weight_kg: 266712,
        home_port: "Port of Los Angeles"
    }
];

describe("GetAllShipsQueryHandler Tests", () => {

    beforeAll(() => {
        mockGetAllShips.mockResolvedValue([]);
        mockGetSpaceShipsFromSpaceX.mockResolvedValue({data: mockdata});
    })

    afterAll(() => {
        // restore replaced property
        jest.restoreAllMocks();
      });

    it('should return a list of ships from SpaceX API, when data is empty from DB', async () => {
        const query = new GetAllShipsQuery();
        const result = await new GetAllShipsQueryHandler().execute(query);
        expect(ShipRepository).toHaveBeenCalledTimes(1);
        expect(mockGetSpaceShipsFromSpaceX).toHaveBeenCalledTimes(1);
        expect(result.length).toBe(mockdata.length);
        expect(result[0].ship_id).toBe(mockdata[0].ship_id);
    });
})