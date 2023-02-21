import Expenses from "./components/expenses/Expenses";
import "./app.css";
function App() {
  const expenses = [
    {
      id: 1,
      title: "Toilet Paper",
      amount: 5.95,
      date: new Date(2020, 7, 14),
    },
    {
      id: 2,
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 3,
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 4,
      title: "New Desk (wooden)",
      amount: 1250,
      date: new Date(2023, 3, 15),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>{expenses[0].date.toISOString()}</p>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
