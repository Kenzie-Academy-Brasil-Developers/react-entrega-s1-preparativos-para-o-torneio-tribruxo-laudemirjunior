import "./style.css";

const Card = ({ img, name, house }) => {
  return (
    <div>
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <h3>{house}</h3>
    </div>
  );
};

export default Card;
