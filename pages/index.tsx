import Button from "@/components/Button/Button";
import ItemCard from "@/components/Card/ItemCard/ItemCard";
import Layout from "@/components/Layout/Layout";
import Card from "models/Card";
import { useState } from "react";
import { getCards } from "services/cardService";
import "@fortawesome/fontawesome-free/css/all.css";
import styles from "./home.module.css";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import Cart from "@/components/Cart/Cart";
import { openCart } from "redux/slices/cartSlice";

export async function getStaticProps() {
  return {
    props: {
      cards: await getCards(),
    },
    revalidate: 10,
  };
}

interface Props {
  cards: Card[];
}

export default function Home(props: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cards, setCards] = useState(props.cards);

  // Redux
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  // Handlers - Start
  const showMore = () => {
    setIsLoading(true);
    getCards(currentPage + 1).then((nextCards) => {
      setCurrentPage(currentPage + 1);
      setCards([...cards, ...nextCards]);
      setIsLoading(false);
    });
  };

  const viewCart = () => {
    dispatch(openCart());
  };
  // Handlers - End

  return (
    <Layout>
      <div className="container">
        <div className="row">
          {cards.map((card) => (
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
