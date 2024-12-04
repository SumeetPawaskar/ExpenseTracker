
import React, { useState } from 'react';
import { useSnackbar } from 'notistack';

const ExpenseForm = ({ walletBalance, setBalance, setExpensesState }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !category || !date) {
      enqueueSnackbar('Please fill all fields', { variant: 'error' });
      return;
    }

    if (parseFloat(amount) > walletBalance) {
      enqueueSnackbar('Insufficient wallet balance', { variant: 'error' });
      return;
    }

    const newExpense = { title, amount: parseFloat(amount), category, date };
    setExpensesState(prev => {
      const updatedExpenses = [...prev, newExpense];
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
      return updatedExpenses;
    });
    setBalance(walletBalance - parseFloat(amount)); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
