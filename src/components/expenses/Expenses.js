import { useState } from "react";
import Card from "../UI/card/Card";
import ExpenseFilter from "./expense-filter/ExpensesFilter";
import ExpenseItem from "./expense-item/ExpenseItem";
export default function Expenses({ expenses: expenses }) {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesHTMLContent = <p>No Expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesHTMLContent = filteredExpenses.map((expense) => (
      <ExpenseItem key={expense.id} expenses={expense} />
    ));
  }
  return (
    <Card className="expenses-container">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilterYear={filterChangeHandler}
      />
      {expensesHTMLContent}
    </Card>
  );
}
