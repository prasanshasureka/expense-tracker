import "./ExpenseItem.css";
import Date from "./ExpenseDate";
import Card from '../GeneralUI/Card';

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <Date date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
