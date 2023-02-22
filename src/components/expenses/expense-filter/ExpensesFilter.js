import { useState } from "react";
import Card from "../../UI/card/Card";
import InputsBox from "../../UI/input/InputsBox";
import "./expensesfilter.css";
export default function ExpenseFilter(props) {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilterYear(event.target.value);
  };
  return (
    <Card className="expenses-filter-container">
      <InputsBox>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </InputsBox>
    </Card>
  );
}
