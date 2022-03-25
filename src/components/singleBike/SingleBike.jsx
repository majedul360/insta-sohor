import "./SingleBike.css";

const SingleBike = ({ bike }) => {
  const { img, name, price } = bike;
  return (
    <div className="single-bike">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h2>{price}</h2>
    </div>
  );
};

export default SingleBike;
