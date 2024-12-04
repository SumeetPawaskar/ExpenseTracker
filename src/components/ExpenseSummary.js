
import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const ExpenseSummary = ({ expenses }) => {
  
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const data = Object.entries(categoryTotals).map(([category, amount]) => ({
    name: category,
    value: amount,
  }));

  return (
    <PieChart width={400} height={400}>
      <Pie data={data} dataKey="value" nameKey="name" outerRadius={150} fill="#8884d8" label />
      <Legend />
    </PieChart>
  );
};

export default ExpenseSummary;
