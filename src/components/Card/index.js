import "./style.css";

const Card = ({ img, name, house, alive }) => {
  return (
    <div className="card">
      <img src={img} alt={name} className={house} />
      <h2>{name}</h2>
      <h3>{house}</h3>
      <h3>{alive}</h3>
    </div>
  );
};

export default Card;
