export class GetAllShipsQuery {
    constructor(
      public readonly ship_type?: string,
      public readonly home_port?: string,
      public readonly weight_kg?: number,
      public readonly sort?: string
      ) {}
  }