import "./style.css";

const CardInitial = ({ btn, setBtn, atualiza }) => {
  return (
    <div className="cardInitial">
      <h1>Torneio tribruxo</h1>
      <h2>Clique no botão para encontrar os feiticeiros!</h2>
      <button
        onClick={function (event) {
          setBtn(!btn);
          atualiza();
        }}
      >
        Começar
      </button>
    </div>
  );
};

export default CardInitial;
