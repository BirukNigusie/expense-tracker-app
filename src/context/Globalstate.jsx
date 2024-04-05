/** @format */

import { createContext, useReducer } from "react";
import AppReducer from "../context/AppReducer";
const initalState = {
  transactions: [],
};
// create a context
export const GlobalContext = createContext(initalState);
// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
