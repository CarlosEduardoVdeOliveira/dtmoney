import { useTransactions } from "../../hooks/useTransactions";
import { FormatDate, FormatNumberInReal } from "../../utils/FormatValue";
import { Conteiner } from "./styles";

export function TransactionTable() {
  const { transactions } = useTransactions();

  return (
    <Conteiner>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === 'deposit' ? FormatNumberInReal(transaction.amount): 
                `- ${FormatNumberInReal(transaction.amount)}`}
              </td>
              <td>{transaction.category}</td>
              <td>
                {FormatDate(transaction.createdAt)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Conteiner>
  );
}
