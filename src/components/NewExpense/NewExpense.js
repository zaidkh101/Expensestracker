import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseData);
  };

  const [newExpenseFlag, setNewExpenseFlag] = useState(false);

  const showFormHandler = () => {
    setNewExpenseFlag(() => {
      return !newExpenseFlag
    });
  };

  return (
    <div className="new-expense">
      {newExpenseFlag === false ? (
        <button onClick={showFormHandler}>
          Add New Expense
        </button>
      ) : (
        <ExpenseForm
          onShowForm={showFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
