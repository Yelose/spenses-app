import Card from "../../UI/card/Card";
import "./../expenseitem.css";
import ExpenseDate from "./expense-date/ExpenseDate";
function ExpenseItem({ expenses: { date, title, amount } }) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item-description">
        <h3>{title}</h3>
        <Card className="expense-item-price">{amount}€</Card>
      </div>
    </Card>
  );
}
export default ExpenseItem;
