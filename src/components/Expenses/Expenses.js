import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../GeneralUI/Card";
import ExpensesFilter from "./ExpensesFilter";

//this is another way to create components using normal function syntax
// instead of arrow functions like used in other components
function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2019");
  const expenses = props.expenses;

  const changeYearHandler = (year) => {
    console.log(year);
    setfilteredYear(year);
  };
  return (
    <div>
      <Card className="expenses">
        {/* sending filteredYear here to establish 2 way binding
        whatever we set as initial state will be the default value of the select dropdown 
        check ExpensesFilter file to see selected tag's value prop*/}
        <ExpensesFilter selected={filteredYear} onChangeFilter={changeYearHandler} />
        <ExpenseItem
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
        />
      </Card>
    </div>
  );
}

export default Expenses;
