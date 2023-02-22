import Expenses from "./components/expenses/Expenses";
import "./app.css";
import NewExpense from "./components/expenses/NewExpense";
import { initialExpenses } from "./data";
import { useState } from "react";
function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="main-container">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
