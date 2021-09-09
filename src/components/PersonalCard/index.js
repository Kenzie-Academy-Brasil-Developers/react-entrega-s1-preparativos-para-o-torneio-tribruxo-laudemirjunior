import "./style.css";
import Card from "../Card";

const PersonalCard = ({ students, atualiza }) => {
  return (
    <div>
      <div className="container">
        {students
          .sort(() => 0.5 - Math.random())
          .map((item) => (
            <Card
              key={item.name}
              img={item.image}
              name={item.name}
              house={item.house}
              alive={item.alive ? "Vivo" : "Morto"}
            />
          ))}
      </div>
      <div className="tenteNovamente">
        <button onClick={atualiza}>Tentar novamente</button>
      </div>
    </div>
  );
};

export default PersonalCard;
