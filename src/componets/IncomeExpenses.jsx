/** @format */

import { GlobalContext } from "../context/Globalstate";
import { useContext } from "react";
const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2);
  const expense = transactions
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2);
  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${Math.abs(expense)}</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
