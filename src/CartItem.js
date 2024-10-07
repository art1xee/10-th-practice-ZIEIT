import React from "react";
import { useGlobalContext } from "./context";

const CartItem = ({ id, img, title, price, amount }) => {
  const { removeItem, increaseAmount, decreaseAmount } = useGlobalContext();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => removeItem(id)}>
          Remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => increaseAmount(id)}>
          +
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={() => decreaseAmount(id)}>
          -
        </button>
      </div>
    </article>
  );
};

export default CartItem;
