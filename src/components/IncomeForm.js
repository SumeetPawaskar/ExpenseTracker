
import React, { useState } from 'react';

const IncomeForm = ({ setBalance }) => {
  const [amount, setAmount] = useState('');

  const handleAddIncome = () => {
    if (!amount || parseFloat(amount) <= 0) {
      return;
    }
    setBalance((prev) => prev + parseFloat(amount));
  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Add Income"
      />
      <button onClick={handleAddIncome}>Add Income</button>
    </div>
  );
};

export default IncomeForm;
