import "./App.css";
import { useState, useEffect } from "react";
import PersonalCard from "./components/PersonalCard";
import InitialPage from "./components/InitialPage";

function App() {
  const [character, setCharacter] = useState([]);
  const [students, setstudents] = useState([]);
  const [InitialButton, setInitialButton] = useState(true);

  const atualiza = () => {
    setstudents([
      character
        .sort(() => 0.5 - Math.random())
        .find((list) => list.house === "Gryffindor"),
      character.find((list) => list.house === "Slytherin"),
      character.find(
        (list) => list.house === "Hufflepuff" || list.house === "Ravenclaw"
      ),
    ]);
  };

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setCharacter(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Torneio Tribruxo</h1>
      {InitialButton && (
        <InitialPage
          InitialButton={InitialButton}
          setInitialButton={setInitialButton}
          atualiza={atualiza}
        />
      )}
      <PersonalCard students={students} atualiza={atualiza}></PersonalCard>
    </div>
  );
}

export default App;
