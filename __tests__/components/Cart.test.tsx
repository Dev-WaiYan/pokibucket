import Cart from "@/components/Cart/Cart";
import { fireEvent, render, screen } from "@testing-library/react";
import mock_card from "mocks/mock_card";
import { Provider } from "react-redux";
import { add } from "redux/slices/cartSlice";
import { store } from "redux/store";

describe("Cart", () => {
  beforeAll(() => {
    store.dispatch(add(mock_card));
  });

  it("renders cart", () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    const title = screen.getByRole("heading");
    const pricePerCard = screen.getByTestId("pricePerCard");
    const stock = screen.getByTestId("stock");
    const cardImg = screen.getByAltText("cardImg");
    const quantity = screen.getByTestId("quantity");
    const totalPricesForACard = screen.getByTestId("totalPricesForACard");
    const btnIncrement = screen.getByTestId("btnIncrement");
    const btnDecrement = screen.getByTestId("btnDecrement");
    const btnClearAll = screen.getByRole("button", {
      name: /clear all/i,
    });
    const totalCardsLabel = screen.getByText(/total cards/i);
    const totalCardsCount = screen.getByTestId("totalCardsCount");
    const totalPriceLabel = screen.getByText(/total price/i);
    const totalPrice = screen.getByTestId("totalPrice");
    const btnPay = screen.getByRole("button", {
      name: /pay now/i,
    });
    const btnCloseViewCart = screen.getByTestId("btnCloseViewCart");

    expect(title).toBeInTheDocument();
    expect(pricePerCard).toBeInTheDocument();
    expect(stock).toBeInTheDocument();
    expect(cardImg).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
    expect(totalPricesForACard).toBeInTheDocument();
    expect(btnIncrement).toBeInTheDocument();
    expect(btnDecrement).toBeInTheDocument();
    expect(btnClearAll).toBeInTheDocument();
    expect(totalCardsLabel).toBeInTheDocument();
    expect(totalCardsCount).toBeInTheDocument();
    expect(totalPriceLabel).toBeInTheDocument();
    expect(totalPrice).toBeInTheDocument();
    expect(btnPay).toBeInTheDocument();
    expect(btnCloseViewCart).toBeInTheDocument();
  });

  it("quantity are changing properly", () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    const quantity = screen.getByTestId("quantity");
    const btnIncrement = screen.getByTestId("btnIncrement");
    const btnDecrement = screen.getByTestId("btnDecrement");

    expect(quantity.innerHTML).toBe("1");

    fireEvent.click(btnIncrement);
    expect(quantity.innerHTML).toBe("2");

    fireEvent.click(btnDecrement);
    expect(quantity.innerHTML).toBe("1");
  });

  it("total cards count and total price in cart are changing properly", () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    const totalCardsCount = screen.getByTestId("totalCardsCount");
    const totalPrice = screen.getByTestId("totalPrice");

    expect(totalCardsCount.innerHTML).toBe("1");
    expect(totalPrice.innerHTML).not.toBe("$0.00");

    const btnIncrement = screen.getByTestId("btnIncrement");
    const totalPriceBeforeIncrementCard = totalPrice.innerHTML;
    fireEvent.click(btnIncrement);
    expect(totalCardsCount.innerHTML).toBe("2");
    expect(totalPrice.innerHTML).not.toBe(totalPriceBeforeIncrementCard);

    const btnClearAll = screen.getByRole("button", {
      name: /clear all/i,
    });

    fireEvent.click(btnClearAll);
    expect(totalCardsCount.innerHTML).toBe("0");
    expect(totalPrice.innerHTML).toBe("$0.00");
  });
});
