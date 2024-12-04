
export const getWalletBalance = () => {
    const balance = localStorage.getItem('walletBalance');
    return balance ? parseFloat(balance) : 5000; 
  };
  
  export const setWalletBalance = (balance) => {
    localStorage.setItem('walletBalance', balance);
  };
  
  export const getExpenses = () => {
    const expenses = localStorage.getItem('expenses');
    return expenses ? JSON.parse(expenses) : [];
  };
  
  export const setExpenses = (expenses) => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  };
  