import Card from "models/Card";

const mock_card: any = {
  id: "mcd19-1",
  name: "Caterpie",
  supertype: "Pokémon",
  subtypes: ["Basic"],
  hp: "50",
  types: ["Grass"],
  evolvesTo: ["Metapod"],
  attacks: [
    {
      cost: ["Grass"],
      name: "Surprise Attack",
      text: "Flip a coin. If tails, this attack does nothing.",
      damage: "20",
      convertedEnergyCost: 1,
    },
  ],
  retreatCost: ["Colorless"],
  convertedRetreatCost: 1,
  set: {
    id: "mcd19",
    name: "McDonald's Collection 2019",
    series: "Other",
    printedTotal: 12,
    ptcgoCode: "",
    total: 12,
    legalities: {
      unlimited: "Legal",
      expanded: "Legal",
    },
    releaseDate: "2019/10/15",
    updatedAt: "2021/09/01 05:37:00",
    images: {
      symbol: "https://images.pokemontcg.io/mcd19/symbol.png",
      logo: "https://images.pokemontcg.io/mcd19/logo.png",
    },
  },
  number: "1",
  artist: "Sekio",
  rarity: "Promo",
  nationalPokedexNumbers: [10],
  legalities: {
    standard: "",
    unlimited: "Legal",
    expanded: "Legal",
  },
  images: {
    small: "https://images.pokemontcg.io/mcd19/1.png",
    large: "https://images.pokemontcg.io/mcd19/1_hires.png",
  },
  tcgplayer: {
    url: "https://prices.pokemontcg.io/tcgplayer/mcd19-1",
    updatedAt: "2022/02/03",
    prices: {
      holofoil: {
        low: 6,
        mid: 10.49,
        high: 12.75,
        market: 10.8,
        directLow: 10.49,
      },
    },
  },
  cardmarket: {
    url: "https://prices.pokemontcg.io/cardmarket/mcd19-1",
    updatedAt: "2022/02/03",
    prices: {
      averageSellPrice: 1.56,
      lowPrice: 0.49,
      trendPrice: 1.88,
      reverseHoloTrend: 1.71,
      lowPriceExPlus: 1,
      avg1: 1.5,
      avg7: 1.64,
      avg30: 1.58,
      reverseHoloAvg1: 0.5,
      reverseHoloAvg7: 1.71,
      reverseHoloAvg30: 1.37,
      germanProLow: 0,
      reverseHoloLow: 0,
      reverseHoloSell: 0,
    },
  },
};
export default mock_card;
