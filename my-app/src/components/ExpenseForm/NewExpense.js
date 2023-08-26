import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
     props.onAddExpense(expenseData);
     setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  
  const cancelEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div>
      {!isEditing && (
        <Card className="expenses">
          <button onClick={startEditingHandler}>Add New Expense</button>
        </Card>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
