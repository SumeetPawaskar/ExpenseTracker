
import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, setExpensesState }) => {
  return (
    <div>
      <h2>Expenses</h2>
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          expense={expense}
          setExpensesState={setExpensesState}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
