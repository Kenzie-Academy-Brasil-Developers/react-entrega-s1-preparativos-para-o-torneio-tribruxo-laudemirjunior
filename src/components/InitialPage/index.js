import "./style.css";

const InitialPage = ({ InitialButton, setInitialButton, atualiza }) => {
  return (
    <div className="initialCard">
      <h1>Torneio tribruxo</h1>
      <h2>Clique no botão para encontrar os feiticeiros!</h2>
      <button
        onClick={function () {
          setInitialButton(!InitialButton);
          atualiza();
        }}
      >
        Começar
      </button>
    </div>
  );
};

export default InitialPage;
