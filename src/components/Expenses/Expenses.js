import { useState } from "react";
import "./Expenses.css";
// import ExpenseItem from "./ExpenseItem";
import Card from "../GeneralUI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";

//this is another way to create components using normal function syntax
// instead of arrow functions like used in other components
function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2019");
  const expenses = props.expenses;

  const changeYearHandler = (year) => {
    setfilteredYear(year);
  };

  // to filter on the basis of year selected
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <p>No Expenses Found!</p>
  // if (filteredExpenses.length > 0){
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       date={expense.date}
  //       amount={expense.amount}
  //     />
  //   ))
  // }

  return (
    <div>
      <Card className="expenses">
        {/* sending filteredYear here to establish 2 way binding
        whatever we set as initial state will be the default value of the select dropdown 
        check ExpensesFilter file to see selected tag's value prop*/}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={changeYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
        {/* showing only filtered expenses */}
        {/* {filteredExpenses.length===0 ? <p>No Expenses Found!</p> : filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))} */}
        {/* {expensesContent} */}
        {/* showing all expenses */}
        {/* {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))} */}
        {/* <ExpenseItem
          title={expenses[0].title}
          date={expenses[0].date}
          amount={expenses[0].amount}
        />
        <ExpenseItem
          title={expenses[1].title}
          date={expenses[1].date}
          amount={expenses[1].amount}
        />
        <ExpenseItem
          title={expenses[2].title}
          date={expenses[2].date}
          amount={expenses[2].amount}
        />
        <ExpenseItem
          title={expenses[3].title}
          date={expenses[3].date}
          amount={expenses[3].amount}
        /> */}
      </Card>
    </div>
  );
}

export default Expenses;
