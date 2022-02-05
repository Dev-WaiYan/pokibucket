import ItemCard from "@/components/Card/ItemCard/ItemCard";
import { render, screen } from "@testing-library/react";
import mock_card from "mocks/mock_card";
import { Provider } from "react-redux";
import { store } from "redux/store";

const ReduxProvider = ({ children, reduxStore }: any) => (
  <Provider store={reduxStore}>{children}</Provider>
);

describe("ItemCard", () => {
  it("renders an item card", () => {
    render(
      <Provider store={store}>
        <ItemCard card={mock_card} />
      </Provider>
    );

    const cardImg = screen.getByAltText("card");
    const cardTitle = screen.getByRole("heading");
    const price = screen.getByTestId("price");
    const rarity = screen.getByText(mock_card.rarity);
    const btnSelectCard = screen.getByRole("button");

    expect(cardImg).toBeInTheDocument();
    expect(cardTitle).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(rarity).toBeInTheDocument();
    expect(btnSelectCard).toBeInTheDocument();
  });
});
