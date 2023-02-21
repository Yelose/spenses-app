import "./../expenseitem.css";
import ExpenseDate from "./expense-date/ExpenseDate";
function ExpenseItem({ expenses: { date, title, amount } }) {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item-description">
        <h3>{title}</h3>
        <p className="expense-item-price">{amount}€</p>
      </div>
    </div>
  );
}
export default ExpenseItem;
