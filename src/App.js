import './App.css';

import React, { useState } from "react";

const App = () => {
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState("male");
  const [beer, setBeer] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(0);

  const calculateBloodAlcoholLevel = () => {
    const litres = beer * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time);
    let result;
    if (gender === "male") {
      result = gramsLeft / (weight * 0.7);
    } else {
      result = gramsLeft / (weight * 0.6);
    }
    result = result < 0 ? 0 : result;
    setResult(result.toFixed(2));
  };

  return (
    <div class="divi">
      <h1>Alkometri</h1>
      <div>
        <label>Paino (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>Sukupuoli:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Mies</option>
          <option value="female">Nainen</option>
        </select>
      </div>
      <div>
        <label>Kaljan määrä:</label>
        <input
          type="number"
          value={beer}
          onChange={(e) => setBeer(e.target.value)}
        />
      </div>
      <div>
        <label>Aika (tunnit):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button onClick={calculateBloodAlcoholLevel}>Laske</button>
      <div>
        <h2>Tulos:</h2>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default App;