import "./App.css";
import { useState, useEffect } from "react";
import CardPerson from "./components/CardPerson";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [estudades, setEstudantes] = useState([]);

  const atualiza = () =>
    setEstudantes(characterList.sort(() => 0.5 - Math.random()).slice(0, 3));

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setCharacterList(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <CardPerson estudades={estudades}></CardPerson>
      <button onClick={atualiza}>Click</button>
    </div>
  );
}

export default App;
