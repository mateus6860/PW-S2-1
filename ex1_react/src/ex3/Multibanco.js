import '../App.css';
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deposit, withdraw } from "./redux/balanceSlice";

function Multibanco() {
  const balance = useSelector((state) => state.balance.balance);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div className="ATM">
      <h1>Máquina Multibanco</h1>
      <h2>Saldo Atual: {balance} €</h2>
      <input 
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={() => dispatch(deposit(amount))}>Depositar</button>
      <button onClick={() => dispatch(withdraw(amount))}>Levantar</button>
    </div>
  );
}

export default Multibanco;

