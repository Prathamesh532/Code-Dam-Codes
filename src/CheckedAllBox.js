import React, { useState } from "react";

const CheckedAllBox = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Cricket", checked: false },
    { id: 2, label: "Football", checked: false },
    { id: 3, label: "Tennis", checked: false },
    { id: 4, label: "Hockey", checked: false },
  ]);

  // The syntax ({ ...box, checked: true }) is used to create a new object that is a shallow copy of the box 
  // object with the checked property set to true. This is a correct way to create a new object with the 
  // updated property value.

  // On the other hand, the syntax { ...box, box.checked: true } is not valid JavaScript syntax. 
  // In an object literal, you should provide the property name (checked in this case) without 
  // the object reference (box). The correct syntax to update a property of the object is { ...box, checked: true }

  // console of box is : 
  // {
  //   "id": 1,
  //   "label": "Cricket",
  //   "checked": true
  // }
  

  const handleChange = (id) => {
    const checks = checkboxes.map((box) => {
      return (
        box.id === id ? { ...box, checked: !box.checked } : box
      )
    });
    setCheckboxes(checks);
  };

  const handleSelectAll = () => {
    const all = checkboxes.map((box) => ({ ...box, checked: true }));
    setCheckboxes(all);
  };

  const handleUnSelect = () => {
    const un = checkboxes.map((box) => {
      return { ...box, checked: false };
    });
    setCheckboxes(un)
  };

  return (
    <>
       <div className="checkbox-container">
      <h1>Select All Checkboxes</h1>
      <div className="checkbox-list">
        {checkboxes.map((box) => (
          <label key={box.id} className="checkbox-label">
            {box.label}
            <input
              type="checkbox"
              checked={box.checked}
              onChange={() => handleChange(box.id)}
            />
            <span className="custom-checkbox"></span>
          </label>
        ))}
      </div>
      <div className="button-container">
        <button className="select-button" onClick={handleSelectAll}>
          Select All
        </button>
        <button className="unselect-button" onClick={handleUnSelect}>
          Un-Select All
        </button>
      </div>
    </div>
    </>
  );
};

export default CheckedAllBox;
