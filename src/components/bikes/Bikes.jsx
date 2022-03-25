import "./Bikes.css";
import SingleBike from "../singleBike/SingleBike";
import Cart from "../cart/Cart";
import { useEffect, useState } from "react";
const Bikes = () => {
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    fetch("data/Data.json")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);

  const [cart, setCart] = useState([]);
  const addToCart = (bike) => {
    setCart([...cart, bike]);
  };
  return (
    <div className="bikes">
      <div className="bikes-container">
        {bikes.map((bike) => (
          <SingleBike key={bike.id} bike={bike} addToCart={addToCart} />
        ))}
      </div>
      <Cart className="cart" cart={cart} setCartAgain={setCart} />
    </div>
  );
};

export default Bikes;
