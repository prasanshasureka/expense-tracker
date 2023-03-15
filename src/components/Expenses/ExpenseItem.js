import "./ExpenseItem.css";
import Date from "./ExpenseDate";
import Card from "../GeneralUI/Card";
// this import is not mandatory any more as react identifies the react-specific files
// but if we want to use 'useState' we must import it
import React from "react";
// import { useState } from "react";

function ExpenseItem(props) {
  //array destructuring
  // useState returns the special variable and a method to change that special variable's value
  // const [title, setTitle] = useState(props.title);

  // can use normal function declration also
  // const clickHandler = () => {
  //   setTitle('New title')
  // }

  return (
    <li>
      <Card className="expense-item">
        <Date date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">Rs. {props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Click here</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
