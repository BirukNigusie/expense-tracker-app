/** @format */

import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";
import Transaction from "./Transaction";
const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      {transactions.map((transaction) => (
        <ul className="list" key={transaction.id}>
          <Transaction transaction={transaction} />
        </ul>
      ))}
    </>
  );
};

export default TransactionList;
