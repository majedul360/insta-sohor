import "./ChooseOne.css";

const ChooseOne = ({ item }) => {
  const { img, name } = item;
  return (
    <div className="choose-one">
      <img src={img} alt="" />
      <h3>{name}</h3>
    </div>
  );
};

export default ChooseOne;
