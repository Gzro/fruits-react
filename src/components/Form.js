import "./Form.css";
import { useState } from "react";

export const Form = () => {
  const [fruits, setFruits] = useState([
    { id: 1, name: "Fraise" },
    { id: 2, name: "Pomme" },
    { id: 3, name: "Pastèque" },
    { id: 4, name: "Poire" },
  ]);
  const [textSaisie, setNouveauFruit] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault(); // eviter le rechargement de la page
    const fruitsCopy = [...fruits];
    fruitsCopy.push({ id: new Date().getTime(), name: textSaisie });
    setFruits(fruitsCopy);
    setNouveauFruit("");
  };

  const handleDelete = (idFruit) => {
    console.log(idFruit);

    const fruitsCopy = [...fruits];

    const arr = fruitsCopy.filter((item) => item.id !== idFruit);
    setFruits(arr);
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };

  return (
    <div>
      <h2>Liste des fruits</h2>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {fruits.map((fruit) => (
              <tr key={fruit.id}>
                <td>{fruit.name}</td>
                <td>
                  <button onClick={() => handleDelete(fruit.id)}>X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="textfield"
          value={textSaisie}
          onChange={handleChange}
          placeholder="Ajouter un fruit.."
        />
        <input type="submit" className="submit-btn" value="Ajouter" />
      </form>
    </div>
  );
};
