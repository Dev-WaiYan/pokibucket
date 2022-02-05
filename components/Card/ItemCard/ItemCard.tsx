import Button from "@/components/Button/Button";
import Card from "models/Card";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { add } from "redux/slices/cartSlice";
import styles from "./itemCard.module.css";

interface Props {
  card: Card;
}

function ItemCard({ card }: Props) {
  // Redux
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  // Handler - Start
  const handleOnClick = () => {
    const existingCardInCart = cart.cards.find((c) => c.id === card.id);
    if (!existingCardInCart) {
      dispatch(add(card));
    }
  };
  // Handler - End

  return (
    <div className={styles.cardContainer}>
      {console.log("cart.cards", cart.cards)}
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src={card.images.large}
          alt="card"
          width={`150px`}
          height={`200px`}
        />
      </div>

      <div className={styles.cardInfoContainer}>
        <h2 className={styles.title}>{card.name}</h2>
        <span className={styles.rarity}>{card.rarity}</span>
        <div className={styles.priceAndStockContainer}>
          <span data-testid="price" className="me-2">
            ${card.cardmarket.prices.averageSellPrice}
          </span>
          <span className="ms-2">{card.set.total} left</span>
        </div>
      </div>
      <div className={styles.btnSelectCardContainer}>
        <Button
          title="Select card"
          onClick={handleOnClick}
          className={
            cart.cards.find((c) => c.id === card.id)
              ? styles.btnSelectCard
              : styles.btnSelectedCard
          }
        />
      </div>
    </div>
  );
}

export default ItemCard;
