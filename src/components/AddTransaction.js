import React from 'react';
import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext)

  
  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
    <h3>Ajouter une nouvelle transaction</h3>
      <form onSubmit={onSubmit} id="form">
        <div className="form-control">
          <label htmlFor=''>Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Entrez le texte..." />
        </div>
        <div className="form-control">
          <label htmlFor='amount'
            >Montant <br />
            (negatif - dépenses, positif - revenu)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Entrer le montant..." />
        </div>
        <button className="btn">Ajouter</button>
      </form>
    </>
  )
}

export default AddTransaction;