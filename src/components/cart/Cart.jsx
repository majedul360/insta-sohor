import { useState } from "react";
import ChooseOne from "../chooseOne/ChooseOne";
import SelectedBike from "../selectedBike/SelectedBike";
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
        return <SelectedBike key={cart.id} cart={cart} />;
      })}
      <div className="btn-container">
        {item && <ChooseOne item={item} />}
        <span className="choose-one-btn" onClick={chooseOne}>
          choose 1 for me
        </span>
        <span onClick={() => setCartAgain([], setItem({}))}>choose again</span>
      </div>
    </div>
  );
};

export default Cart;
