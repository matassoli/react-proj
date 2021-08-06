import React, { useState } from "react";

import ExpenseItem from "../Expenses/ExpenseItem";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let noExpensesContent = <p>Nessuna spesa trovata.</p>;
  if (filteredExpenses.length > 0) {
    noExpensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {noExpensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
