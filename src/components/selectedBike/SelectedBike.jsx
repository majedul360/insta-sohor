import "./SelectedBike.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SelectedBike = ({ cart }) => {
  const { img, name } = cart;
  const [deleteBike, setDeleteBike] = useState(false);
  return (
    <div className={deleteBike ? "selected-bike active" : "selected-bike"}>
      <img src={img} alt="" />
      <h3>{name}</h3>

      <FontAwesomeIcon
        onClick={() => setDeleteBike(!deleteBike)}
        className="icon"
        icon={faTrash}
      />
    </div>
  );
};

export default SelectedBike;
