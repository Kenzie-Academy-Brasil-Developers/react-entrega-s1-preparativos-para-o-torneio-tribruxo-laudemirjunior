import "./App.css";
import { useState, useEffect } from "react";
import Cards from "./components/Cards";

function App() {
  const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setCharacterList(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Cards characterList={characterList}></Cards>
    </div>
  );
}

export default App;
