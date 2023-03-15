import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     setEnteredAmount: "",
  //     enteredDate: "",
  //   });
  //   console.log(userInput);

  //react schedules the state changes and does not perform it immediately
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // if we set state like this, this might not give us the desired output always
    // in this current way, we are depending on the previous state
    // since set state is scheduled and not executed immediately
    // this might mean that many setState are scheduled and one of these might use a state
    // snapdshot that is outdated
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // this way we can ensure that we operate on the latest snapshot of the state
    // and this is a full proof way of getting the desired output
    // setUserInput((prevState) => {
    //     return {...prevState, enteredAmount: event.target.value}
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    // the default behavior when we click on the submit button of a form
    // is that a request is sent to the development server and hence the page reloads
    // to prevent the page reload
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    // console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* setting the value here like this, implements 2 way 
          binding as we update the input when the state changes and vice versa as well */}
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelExpenseData}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
