import { useState } from "react";
import "./Cart.css";

const Cart = ({ cart, setCartAgain }) => {
  const [item, setItem] = useState({});
  const chooseOne = () => {
    var item = cart[Math.floor(Math.random() * cart.length)];
    setItem(item);
  };
  return (
    <div className="cart">
      <h2>selected bikes</h2>
      {cart.map((cart) => {
        return (
          <h3 className="bike-name" key={cart.id}>
            {cart.name}
          </h3>
        );
      })}
      <div className="btn-container">
        <span onClick={chooseOne}>choose 1 for me</span>
        <span onClick={() => setCartAgain([], setItem({}))}>choose again</span>
        {item && <h2>{item.name}</h2>}
      </div>
    </div>
  );
};

export default Cart;
