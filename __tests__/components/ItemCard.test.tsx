import ItemCard from "@/components/Card/ItemCard/ItemCard";
import { render, screen } from "@testing-library/react";

describe("ItemCard", () => {
  it("renders an item card", () => {
    render(
      <ItemCard
        id="pk-1"
        title="Pokemon Card"
        img="https://images.pokemontcg.io/pl1/1.png"
        price={30}
        rarity="rare"
        stock={100}
      />
    );

    const cardImg = screen.getByAltText("card");
    const cardTitle = screen.getByRole("heading", {
      name: /Pokemon Card/i,
    });
    const price = screen.getByText(/30/i);
    const rarity = screen.getByText(/rare/i);
    const btnSelectCard = screen.getByRole("button");

    expect(cardImg).toBeInTheDocument();
    expect(cardTitle).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(rarity).toBeInTheDocument();
    expect(btnSelectCard).toBeInTheDocument();
  });
});
