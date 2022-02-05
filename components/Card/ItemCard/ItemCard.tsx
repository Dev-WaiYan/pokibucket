import Button from "@/components/Button/Button";
import Image from "next/image";
import styles from "./itemCard.module.css";

interface Props {
  id: string;
  title: string;
  img: string;
  rarity: string;
  price: number;
  stock: number;
}

function ItemCard({ id, title, img, rarity, price, stock }: Props) {
  const handleOnClick = () => {};

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src={img}
          alt="card"
          width={`150px`}
          height={`200px`}
        />
      </div>

      <div className={styles.cardInfoContainer}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.rarity}>{rarity}</span>
        <div className={styles.priceAndStockContainer}>
          <span className="me-2">${price}</span>
          <span className="ms-2">{stock} left</span>
        </div>
      </div>
      <Button
        title="Select card"
        onClick={handleOnClick}
        className={styles.btnSelectCard}
      />
    </div>
  );
}

export default ItemCard;
