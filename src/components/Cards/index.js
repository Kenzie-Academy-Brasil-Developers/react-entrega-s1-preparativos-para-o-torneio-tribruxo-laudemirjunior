import "./style.css";

const Card = ({ characterList }) => {
  return (
    <section>
      {characterList.map((item) => (
        <Card
          key={item.name}
          img={item.image}
          name={item.name}
          house={item.house}
        />
      ))}
    </section>
  );
};

export default Card;
