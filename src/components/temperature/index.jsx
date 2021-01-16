import { useState } from 'react';
import TemperatureInput from "./components/temperature-input";

function Calculator() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState((celsius * 9 / 5 )  + 32);

  function onFahrenheitChange(value) {
    setFahrenheit(value);
    setCelsius((value - 32) * 5 / 9);
  }
  function onCelsiusChange(value) {
    setCelsius(value);
    setFahrenheit(value*(9/5) + 32);
}

  return (
    <div>
      <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={onFahrenheitChange} />
      <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={onCelsiusChange} />
    </div>
  );
}
export default Calculator;