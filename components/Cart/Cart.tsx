import Card from "models/Card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import {
  closeCart,
  decrementQuantity,
  incrementQuantity,
  remove,
  removeAll,
} from "redux/slices/cartSlice";
import { isEmptyString } from "utils/utils";
import Button from "../Button/Button";
import styles from "./cart.module.css";

function Cart() {
  const [isShowWarning, setIsShowWarning] = useState(false);
  const [paymentProcessInfo, setPaymentProcessInfo] = useState<{
    success: string;
    error: string;
  }>({
    success: "",
    error: "",
  });

  // Redux
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  // Handlers - Start
  const increment = (targetCard: Card) => {
    dispatch(incrementQuantity(targetCard));
  };

  const decrement = (targetCard: Card) => {
    dispatch(decrementQuantity(targetCard));
  };

  const removeCard = (targetCard: Card) => {
    dispatch(remove(targetCard));
  };

  const clearAll = () => {
    dispatch(removeAll());
  };

  const payNow = () => {
    if (cart.values.length === 0) {
      setIsShowWarning(true);
      return;
    }

    // You can make logic for payment process.
    // If success, set isSuccess = true.
    const isSuccess = true;
    if (isSuccess) {
      setPaymentProcessInfo({
        ...paymentProcessInfo,
        error: "",
        success: "Payment success!",
      });
    }
    clearAll();
  };

  const closeViewCart = () => {
    dispatch(closeCart());
  };
  // Handlers - End

  // Helper functions - Start
  const getTotalCardsCountInCart = () => {
    let totalCount = 0;
    cart.values.forEach((v) => {
      totalCount += v.quantity;
    });
    return totalCount;
  };

  const getTotalPriceInCart = () => {
    let totalPrices = 0.0;
    cart.values.forEach((v) => {
      totalPrices += parseFloat(
        (v.card.cardmarket.prices.averageSellPrice * v.quantity).toFixed(2)
      );
    });

    return totalPrices.toFixed(2);
  };
  // Helper functions - End

  // Utils - Start
  const BtnCloseViewCart = () => (
    <div className={styles.btnCloseViewCartContainer}>
      <Button
        title={<i className="fas fa-times"></i>}
        data-testid="btnCloseViewCart"
        onClick={closeViewCart}
        className={styles.btnCloseViewCart}
      />
    </div>
  );
  // Utils - End

  // Effects - Start
  useEffect(() => {
    setIsShowWarning(false);
  }, [cart.values]);
  // Effects - End

  return (
    <>
      {isEmptyString(paymentProcessInfo.success) &&
      isEmptyString(paymentProcessInfo.error) ? (
        <div className={styles.cartContainer}>
          <div className={styles.cartItemsContainer}>
            {cart.values.length === 0 && (
              <p className={styles.emptyCartHint}>
                You have no chosen items in the cart.
              </p>
            )}
            {isShowWarning && (
              <p className={styles.warning}>Cart is empty now.</p>
            )}
            {cart.values.map((v) => (
              <div
                className="row py-4 d-flex align-items-center"
                key={v.card.id}
              >
                <div className="col-4">
                  <Image
                    className={styles.cardImg}
                    src={v.card.images.small}
                    width={`150px`}
                    height={`250px`}
                    alt="cardImg"
                  />
                </div>
                <div className="col-4">
                  <h2 className={styles.title}>{v.card.name}</h2>
                  <span data-testid="pricePerCard">
                    ${v.card.cardmarket.prices.averageSellPrice}{" "}
                    <span className={styles.perCard}>per card</span>
                  </span>

                  <div className={styles.stockContainer} data-testid="stock">
                    <span className={styles.stock}>{v.card.set.total}</span>{" "}
                    <span className={styles.cardLeft}>cards left</span>
                  </div>
                </div>
                <div className="col-4 d-flex flex-column align-items-end">
                  <span className={styles.quantity} data-testid="quantity">
                    {v.quantity}
                  </span>
                  <div className={styles.quantityBtnsContainer}>
                    <div className={styles.quantityBtnContainer}>
                      <Button
                        className={styles.btnIncrement}
                        data-testid="btnIncrement"
                        title={<i className="fas fa-angle-up"></i>}
                        onClick={() => increment(v.card)}
                      />
                    </div>
                    <div className={styles.quantityBtnContainer}>
                      {v.quantity === 1 ? (
                        <Button
                          className={styles.btnDecrementAndRemove}
                          data-testid="btnDecrement"
                          title={<i className="fas fa-times"></i>}
                          onClick={() => removeCard(v.card)}
                        />
                      ) : (
                        <Button
                          className={styles.btnDecrement}
                          data-testid="btnDecrement"
                          title={<i className="fas fa-angle-down"></i>}
                          onClick={() => decrement(v.card)}
                        />
                      )}
                    </div>
                  </div>

                  <div
                    className={styles.totalPricesForACardContainer}
                    data-testid="totalPricesForACard"
                  >
                    <span>price</span>
                    <span className={styles.totalPricesForACard}>
                      $
                      {(
                        v.card.cardmarket.prices.averageSellPrice * v.quantity
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            <Button
              title="Clear all"
              onClick={clearAll}
              className={styles.btnClearAll}
            />
          </div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              <div className="d-flex my-2 justify-content-between">
                <span className={styles.totalCardsCountLabel}>Total cards</span>
                <span
                  className={styles.totalCardsCount}
                  data-testid="totalCardsCount"
                >
                  {getTotalCardsCountInCart()}
                </span>
              </div>
              <div className="d-flex my-2 justify-content-between">
                <span className={styles.totalPriceInCartLabel}>
                  Total price
                </span>
                <span
                  className={styles.totalPriceInCart}
                  data-testid="totalPrice"
                >
                  ${getTotalPriceInCart()}
                </span>
              </div>
              <div className="d-flex justify-content-center">
                <Button
                  title="Pay now"
                  onClick={payNow}
                  className={styles.btnPay}
                />
              </div>
            </div>
            <div className="col-3"></div>
          </div>
          <BtnCloseViewCart />
        </div>
      ) : (
        <div className={styles.paymentProcessStatusContainer}>
          {paymentProcessInfo.success && (
            <>
              <i
                className={`fas fa-check-circle ${styles.paymentProcessInfoStatusIcon}`}
              ></i>
              <b>{paymentProcessInfo.success}</b>
            </>
          )}
          {paymentProcessInfo.error && (
            <>
              <i
                className={`fas fa-times ${styles.paymentProcessInfoStatusIcon}`}
              ></i>
              <b>{paymentProcessInfo.error}</b>
            </>
          )}
          <div className={styles.btnPaymentProcessInfoStatusClose}>
            <BtnCloseViewCart />
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
