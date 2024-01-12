import React, { useState } from "react";

const TempertureConverter = () => {
  const [temp, setTemp] = useState(0);

  function handleFahernehirt(temp) {
    return Math.round(temp + 273.15);
  }

  function handleKelvini(temp) {
    return Math.round((temp * 9) / 5 + 32);
  }

  return (
    <div>
      <input
        type="number"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
        placeholder="In Ceslius"
      />
      <p>
        {temp}°C is {handleFahernehirt(temp)}°F and {handleKelvini(temp)}K.
      </p>
    </div>
  );
};

export default TempertureConverter;
