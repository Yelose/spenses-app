import "../../../expenses/expenseitem.css";

export default function ExpenseDate({ date: date }) {
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="date-container">
      <h3>{month}</h3>
      <h1>{day}</h1>
      <h3>{year}</h3>
    </div>
  );
}
