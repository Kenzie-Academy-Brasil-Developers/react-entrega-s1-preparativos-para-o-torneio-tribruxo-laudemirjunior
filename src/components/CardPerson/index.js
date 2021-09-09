import "./style.css";
import Card from "../Card";

const CardPerson = ({ estudades }) => {
  return (
    <div>
      {estudades.map((item) => (
        <Card
          key={item.name}
          img={item.image}
          name={item.name}
          house={item.house}
          alive={item.alive}
        />
      ))}
    </div>
  );
};

export default CardPerson;
