import "./App.css";
import { useState, useEffect } from "react";
import CardPerson from "./components/CardPerson";
import CardInitial from "./components/CardInitial";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [estudades, setEstudantes] = useState([]);
  const [btn, setBtn] = useState(true);

  const atualiza = () => {
    setEstudantes([
      characterList
        .sort(() => 0.5 - Math.random())
        .find((list) => list.house === "Gryffindor"),
      characterList
        .sort(() => 0.5 - Math.random())
        .find((list) => list.house === "Slytherin"),
      characterList
        .sort(() => 0.5 - Math.random())
        .find(
          (list) => list.house === "Hufflepuff" || list.house === "Ravenclaw"
        ),
    ]);
  };

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setCharacterList(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {btn && <CardInitial btn={btn} setBtn={setBtn} atualiza={atualiza} />}
      <div className="initial">
        <CardPerson estudades={estudades}></CardPerson>
      </div>
      <div className="buttons">
        <button onClick={atualiza}>Tentar novamente</button>
      </div>
    </div>
  );
}

export default App;
