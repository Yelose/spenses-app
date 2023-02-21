import ExpenseItem from "./expense-item/ExpenseItem";
export default function Expenses({ expenses: expenses }) {
  return (
    <div className="expenses-container">
      <ExpenseItem expenses={expenses[0]} />
      <ExpenseItem expenses={expenses[1]} />
      <ExpenseItem expenses={expenses[2]} />
      <ExpenseItem expenses={expenses[3]} />
    </div>
  );
}
