import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import numberWithCommas from "./utils/format";

function Balance(props) {
  const { transactions } = useContext(GlobalContext);
  var amounts = transactions.map((transaction) => transaction.amount);
  var total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Balance:</h4>
      <h1> Rs.{numberWithCommas(total)}</h1>
    </>
  );
}

export default Balance;
