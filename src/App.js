
import React, { useState, useEffect } from 'react';
import { getWalletBalance, setWalletBalance, getExpenses, setExpenses } from './utils/storage';
import ExpenseForm from './components/ExpenseForm';
import IncomeForm from './components/IncomeForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import ExpenseTrends from './components/ExpenseTrends';
import WalletBalance from './components/WalletBalance';
import { SnackbarProvider } from 'notistack';

const App = () => {
  const [walletBalance, setBalance] = useState(getWalletBalance());
  const [expenses, setExpensesState] = useState(getExpenses());

  useEffect(() => {
    setWalletBalance(walletBalance);
    setExpenses(expenses);
  }, [walletBalance, expenses]);

  return (
    <SnackbarProvider maxSnack={3}>
      <div className="app">
        <WalletBalance balance={walletBalance} />
        <IncomeForm setBalance={setBalance} />
        <ExpenseForm walletBalance={walletBalance} setBalance={setBalance} setExpensesState={setExpensesState} />
        <ExpenseList expenses={expenses} setExpensesState={setExpensesState} />
        <ExpenseSummary expenses={expenses} />
        <ExpenseTrends expenses={expenses} />
      </div>
    </SnackbarProvider>
  );
};

export default App;

