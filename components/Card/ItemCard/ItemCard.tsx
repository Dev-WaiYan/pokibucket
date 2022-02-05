import Button from "@/components/Button/Button";
import Image from "next/image";

interface Props {
  id: string;
  title: string;
  rarity: string;
  price: number;
  stock: number;
}

function ItemCard({ id, title, rarity, price, stock }: Props) {
  const handleOnClick = () => {};

  return (
    <div className="d-flex flex-column align-items-center">
      <div>
        <Image src="/imgs/pokibucket_logo.png" layout="fill" alt="card" />
      </div>
      <div>
        <h2>{title}</h2>
        <span>{rarity}</span>
        <div>
          <span>${price}</span>
          <span>{stock} left</span>
        </div>
        <Button title="Select card" onClick={handleOnClick} />
      </div>
    </div>
  );
}

export default ItemCard;
