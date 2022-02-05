interface TcgPlayer {
  url: string;
  updatedAt: string;
  prices: {
    normal?: PriceTypeFields;
    holofoil?: PriceTypeFields;
    reverseHolofoil?: PriceTypeFields;
    "1stEditionHolofoil"?: PriceTypeFields;
    "1stEditionNormal"?: PriceTypeFields;
  };
}

interface PriceTypeFields {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
}

export default TcgPlayer;
