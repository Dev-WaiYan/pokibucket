import Abilities from "./Ability";
import AncientTrait from "./AncientTrait";
import Attack from "./Attack";
import Resistance from "./Resistance";
import ModelSet from "./ModelSet";
import TcgPlayer from "./TcgPlayer";
import Weakness from "./Weakness";
import Legality from "./Legality";
import CardMarket from "./CardMarket";

interface Card {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  level: string;
  hp: string;
  types: string[];
  evolvesFrom: string;
  evolvesTo: string[];
  rules: string[];
  ancientTrait: AncientTrait;
  abilities: Abilities[];
  attacks: Attack[];
  weaknesses: Weakness[];
  resistances: Resistance[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: ModelSet;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: Legality;
  regulationMark: string;
  images: {
    small: string;
    large: string;
  };
  tcgplayer: TcgPlayer;
  cardmarket: CardMarket;
}

export default Card;
