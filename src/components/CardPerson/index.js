import "./style.css";
import Card from "../Card";

const CardPerson = ({ estudades }) => {
  return (
    <div className="container">
      {estudades.map((item) => (
        <Card
          key={item.name}
          img={item.image}
          name={item.name}
          house={item.house}
          alive={item.alive ? "Alive" : "Dead"}
        />
      ))}
    </div>
  );
};

export default CardPerson;
