import { useState } from "react";
import Card from "../../UI/card/Card";
import InputsBox from "../../UI/input/InputsBox";
import "./expenseform.css";
export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [enteredForm, setEnteredForm] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // si no se pone ...enteredForm delante de enteredTitle, se pierde el valor de los demás campos
    // setEnteredForm({ ...enteredForm, enteredTitle: event.target.value });
    // setEnteredForm((prevState) => {
    //     return { ...prevState, enteredTitle: event.target.value }
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setEnteredForm({ ...enteredForm, enteredAmount: event.target.value });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setEnteredForm({ ...enteredForm, enteredDate: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <Card className="expense-item">
        <InputsBox className="new-expense-container">
          <input
            placeholder="title"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          <input
            placeholder="amount"
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
          <input
            placeholder="date"
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </InputsBox>
        <div>
          <button type="submit">Add Expense</button>
        </div>
      </Card>
    </form>
  );
}
