import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [expenseFormVisible, setExpenseFormVisible] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.addNewExpense(expenseData);
    setExpenseFormVisible(false);
  };

  const addExpenseClickHandler = () => {
    setExpenseFormVisible(true);
  };

  const cancelExpenseFormHandler = (visibleValue) => {
    setExpenseFormVisible(false);
  };

  return (
    <div className="new-expense">
      {!expenseFormVisible && (
        <button onClick={addExpenseClickHandler}>Add Expense</button>
      )}
      {expenseFormVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelExpenseData={cancelExpenseFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
