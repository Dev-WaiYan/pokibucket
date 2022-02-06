import Card from "models/Card";
import ModelSet from "models/ModelSet";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
import styles from "./searchAndFilter.module.css";

interface Props {
  types: string[];
  rarities: string[];
  sets: ModelSet[];
  setCards?: Dispatch<SetStateAction<Card[]>>;
  searchInputs: {
    name: string;
  };
  setSearchInputs: Dispatch<
    SetStateAction<{
      name: string;
    }>
  >;
  filterInputs: {
    type: string;
    rarity: string;
    set: string;
  };
  setFilterInputs: Dispatch<
    SetStateAction<{
      type: string;
      rarity: string;
      set: string;
    }>
  >;
}

function SearchAndFilter({
  types,
  rarities,
  sets,
  setCards,
  searchInputs,
  setSearchInputs,
  filterInputs,
  setFilterInputs,
}: Props) {
  // Handlers - Start
  const handleSearchInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInputs({
      ...searchInputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilterInputOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterInputs({
      ...filterInputs,
      [e.target.name]: e.target.value,
    });
  };
  // Handlers - End

  return (
    <div className="d-flex justify-content-center flex-wrap">
      <Input
        name="name"
        input={searchInputs.name}
        onChange={handleSearchInputOnChange}
        placeholder="Name..."
        className={styles.search}
      />
      <Select
        input={filterInputs.type}
        name="type"
        onChange={handleFilterInputOnChange}
        options={types.map((type) => {
          return { text: type, value: type };
        })}
        defaultSelectOption={{ text: "Type", value: "_default" }}
        data-testid="type"
        className={styles.typeFilter}
      />
      <Select
        input={filterInputs.rarity}
        name="rarity"
        onChange={handleFilterInputOnChange}
        options={rarities.map((rarity) => {
          return { text: rarity, value: rarity };
        })}
        defaultSelectOption={{ text: "Rarity", value: "_default" }}
        data-testid="rarity"
        className={styles.rarityFilter}
      />
      <Select
        input={filterInputs.set}
        name="set"
        onChange={handleFilterInputOnChange}
        options={sets.map((set) => {
          return { text: set.name, value: set.name };
        })}
        defaultSelectOption={{ text: "Set", value: "_default" }}
        data-testid="set"
        className={styles.setFilter}
      />
    </div>
  );
}

export default SearchAndFilter;
