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
  return (
    <div className="bikes">
      <div className="bikes-container">
        {bikes.map((bike) => (
          <SingleBike key={bike.id} bike={bike} />
        ))}
      </div>
      <Cart />
    </div>
  );
};

export default Bikes;
