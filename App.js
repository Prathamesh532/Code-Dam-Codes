import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./src/Counter";
import DisableButton from "./src/DisableButton";
import TempertureConverter from "./src/TempertureConverter";
import LocalStorage from "./src/LocalStorage";
import Todo from "./src/Todo";
import CheckedAllBox from "./src/CheckedAllBox";
import './style.css'

const App = () => {
  return (
    <React.Fragment>
        <h1>React Js </h1>
        {/* <Counter />
        <DisableButton />
        <TempertureConverter />
        <LocalStorage />
        <Todo /> */}
        <CheckedAllBox />
    </React.Fragment>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)