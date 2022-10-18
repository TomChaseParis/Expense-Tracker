import React from 'react';
import Transaction from './Transaction';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {

  const { transactions } = useContext(GlobalContext); 

  return (
    <>
     <h3>Historique</h3>
      <ul id="list" className="list">
      {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      
    </ul>
    
    </>
  
  )
}

export default TransactionList;