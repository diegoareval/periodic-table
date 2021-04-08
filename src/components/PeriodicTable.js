import React, { useState } from "react";
import "../styles/index.css";
import Categories from "./Categories";
import Cell from "./Cell";


function PeriodicTable(props) {
    
  const [state, setState] = useState(
    props.elements.reduce(
      (state, { category }) => Object.assign(state, { [category]: true }),
      {}
    )
  );

  const handleChange = (event, category) => {
    setState({
      ...state,
      ...{ [category]: event.target.checked },
    })
  }
  return (
    <div className="table">
      <div className="cells">
        {props.elements.map((e) =>
          Cell({
            ...e,
            visible: state[e.category],
          })
        )}
      </div>
      <div className="categories">
        {Object.keys(state).map((category) => (
         <Categories checked={state[category]} category={category} handleChange={handleChange}/>
        ))}
      </div>
    </div>
  );
}

export default PeriodicTable
