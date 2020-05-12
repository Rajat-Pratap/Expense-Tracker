import React, { Component } from "react";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import TransactionList from "./TransactionList";
import "./App.css";
import AddTransaction from "./AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

class App extends Component {
  render() {
    return (
      <GlobalProvider>
        <h1 className="App-header">This is expense manager</h1>
        <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    );
  }
}

export default App;
