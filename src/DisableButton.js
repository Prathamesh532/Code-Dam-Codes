import React, { useState } from "react";

const DisableButton = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button disabled={value.length < 3}>Click</button>
    </div>
  );
};

export default DisableButton;
