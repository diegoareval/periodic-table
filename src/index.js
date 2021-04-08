import React from "react";
import ReactDOM from "react-dom";
import PeriodicTable from "./components/PeriodicTable";
import PeriodicTableJSON from "./data/periodicTable";


function App(props) {
  return <PeriodicTable elements={props.elements} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(App(PeriodicTableJSON), rootElement);
