import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";


interface Transactions {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transactions, 'id' | 'createdAt'>

interface TransactionsProviderContext{
    children: ReactNode
}
interface TransactionContextData{
  transactions: Transactions[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData);

export function TransactionsProvider({children}: TransactionsProviderContext) {

  const [transactions, setTransactions] = useState<Transactions[]>([]);
    useEffect(() => {
        api
        .get("/transactions")
        .then((response) => setTransactions(response.data.transactions));
    }, []);
    async function createTransaction(transactionInput: TransactionInput) {
      const response = await api.post('/transactions', {
        ...transactionInput, 
        createdAt: new Date()
      })
      const {transaction} = response.data
      setTransactions([...transactions, transaction])
    }
  return (
    <TransactionContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionContext.Provider>
  );
}
export function useTransactions() {
  const context = useContext(TransactionContext)
  return context
}