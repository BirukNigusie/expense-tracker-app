/** @format */
import { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";
const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      Cash({transaction.text}){" "}
      <span>
        {sign}
        {Math.abs(transaction.amount)}$
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn">
        X
      </button>
    </li>
  );
};

export default Transaction;
