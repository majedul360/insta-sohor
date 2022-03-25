import "./SingleBike.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const SingleBike = ({ bike }) => {
  const { img, name, price } = bike;
  return (
    <div className="single-bike">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h2>price: {price} BDT</h2>
      <span>
        add to cart <FontAwesomeIcon icon={faShoppingCart} />{" "}
      </span>
    </div>
  );
};

export default SingleBike;
