import { useState } from 'react';
import Modal from 'react-modal'
import { NewTransactionModal } from './components/NewTransactionModal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

function App() {
        const [isNewTransactionModalOpen, setIsNewTransactionOpenModal] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpenModal(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpenModal(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal} 
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
