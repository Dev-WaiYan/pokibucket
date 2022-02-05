import Button from "@/components/Button/Button";
import ItemCard from "@/components/Card/ItemCard/ItemCard";
import Layout from "@/components/Layout/Layout";
import Card from "models/Card";
import { useState } from "react";
import { getCards } from "services/cardService";
import "@fortawesome/fontawesome-free/css/all.css";
import styles from "./home.module.css";

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

  // Handlers - Start
  const showMore = () => {
    setIsLoading(true);
    getCards(currentPage + 1).then((nextCards) => {
      setCurrentPage(currentPage + 1);
      setCards([...cards, ...nextCards]);
      setIsLoading(false);
    });
  };
  // Handlers - End

  return (
    <Layout>
      <div className="container">
        <div className="row">
          {cards.map((card) => (
            <div className="col-sm-4">
              <ItemCard
                key={card.id}
                id={card.id}
                title={card.name}
                img={card.images.large}
                price={card.cardmarket.prices.averageSellPrice}
                rarity={card.rarity}
                stock={card.set.total}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex align-items-center flex-column my-4">
        {isLoading && <b>Please Wait...</b>}
        <Button
          title={<i className="fas fa-search">&nbsp;&nbsp;show more</i>}
          onClick={showMore}
          className={styles.btnShowMore}
        />
      </div>
    </Layout>
  );
}
