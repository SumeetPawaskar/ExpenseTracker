
import React from 'react';

const ExpenseItem = ({ expense, setExpensesState }) => {
  const handleDelete = () => {
    setExpensesState((prev) => {
      const updatedExpenses = prev.filter(e => e !== expense);
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
      return updatedExpenses;
    });
  };

  return (
    <div>
      <h3>{expense.title}</h3>
      <p>{expense.amount} - {expense.category} on {expense.date}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ExpenseItem;
