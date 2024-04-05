/** @format */

import "./App.css";
import Header from "./componets/Header";
import Balance from "./componets/Balance";
import IncomeExpenses from "./componets/IncomeExpenses";
import TransactionList from "./componets/TransactionList";
import Addtransaction from "./componets/Addtransaction";
import { GlobalProvider } from "./context/Globalstate";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
      </div>
      <IncomeExpenses />

      <TransactionList />
      
      <Addtransaction />
    </GlobalProvider>
  );
}

export default App;
