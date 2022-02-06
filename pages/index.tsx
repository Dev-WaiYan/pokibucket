import Button from "@/components/Button/Button";
import ItemCard from "@/components/Card/ItemCard/ItemCard";
import Layout from "@/components/Layout/Layout";
import Card from "models/Card";
import { useEffect, useState } from "react";
import { getCards } from "services/cardService";
import "@fortawesome/fontawesome-free/css/all.css";
import styles from "./home.module.css";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import Cart from "@/components/Cart/Cart";
import { openCart } from "redux/slices/cartSlice";
import SearchAndFilter from "@/components/SearchAndFilter/SearchAndFilter";
import { getTypes } from "services/typeService";
import ModelSet from "models/ModelSet";
import { getRarities } from "services/rarityService";
import { getSets } from "services/setService";

export async function getStaticProps() {
  return {
    props: {
      cards: await getCards(),
      types: await getTypes(),
      rarities: await getRarities(),
      sets: await getSets(),
    },
    revalidate: 10,
  };
}

interface Props {
  cards: Card[];
  types: string[];
  rarities: string[];
  sets: ModelSet[];
}

export default function Home(props: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cards, setCards] = useState(props.cards);
  const { types, rarities, sets } = props;

  // Search and filter fields
  const [searchInputs, setSearchInputs] = useState({
    name: "",
  });
  const [filterInputs, setFilterInputs] = useState({
    type: "_default",
    rarity: "_default",
    set: "_default",
  });
  // Search and filter fields

  // Redux
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  // Handlers - Start
  const showMore = () => {
    setIsLoading(true);
    getCards(
      currentPage + 1,
      12,
      filterInputs.type,
      filterInputs.rarity,
      filterInputs.set,
      searchInputs.name
    ).then((nextCards) => {
      setCurrentPage(currentPage + 1);
      setCards([...cards, ...nextCards]);
      setIsLoading(false);
    });
  };

  const viewCart = () => {
    dispatch(openCart());
  };
  // Handlers - End

  // Effects - Start
  useEffect(() => {
    setCurrentPage(1);
    getCards(
      1,
      12,
      filterInputs.type,
      filterInputs.rarity,
      filterInputs.set,
      searchInputs.name
    ).then((cards) => {
      setCards(cards);
    });
  }, [
    filterInputs.type,
    filterInputs.rarity,
    filterInputs.set,
    searchInputs.name,
  ]);
  // Effects - End

  return (
    <Layout>
      <SearchAndFilter
        searchInputs={searchInputs}
        setSearchInputs={setSearchInputs}
        filterInputs={filterInputs}
        setFilterInputs={setFilterInputs}
        types={types}
        rarities={rarities}
        sets={sets}
        setCards={setCards}
      />

      <div className="container">
        <div className="row">
          {cards &&
            cards.map((card) => (
              <div key={card.id} className="col-sm-4">
                <ItemCard card={card} />
              </div>
            ))}
        </div>
      </div>
      <div className="d-flex align-items-center flex-column mb-5 mt-3">
        {isLoading && <i>Please Wait...</i>}
        <Button
          title={<i className="fas fa-search">&nbsp;&nbsp;show more</i>}
          onClick={showMore}
          className={styles.btnShowMore}
        />
      </div>

      {!cart.isOpenCart && (
        <div className={styles.viewCartContainer}>
          {cart.values.length > 0 && (
            <span className={styles.countInCart}>{cart.values.length}</span>
          )}
          <Button
            title={
              <i className="fas fa-shopping-cart">&nbsp;&nbsp;View cart</i>
            }
            onClick={viewCart}
            className={styles.btnViewCart}
          />
        </div>
      )}

      {cart.isOpenCart && <Cart />}
    </Layout>
  );
}
