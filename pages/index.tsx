import ItemCard from "@/components/Card/ItemCard/ItemCard";
import Layout from "@/components/Layout/Layout";
import Card from "models/Card";
import { getCards } from "services/cardService";

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

export default function Home({ cards }: Props) {
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
    </Layout>
  );
}
