import React from 'react';
import './App.css';

import Header from './components/header';
import Balance from './components/balance';
import IncomeExpence from './components/incomeExpence';
import ItemsList from './components/itemsList';
import TransactionForm from './components/form';

import {GlobalProvider} from './context/globalState';



const  App = () => {
  return (
      <GlobalProvider>
        <div className="container">
          <Header />
          <Balance />
          <IncomeExpence />
          <ItemsList />
          <TransactionForm />
      </div>
      </GlobalProvider>
  );
}

export default App;
