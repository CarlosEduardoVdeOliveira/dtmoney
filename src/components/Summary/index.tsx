import { Conteiner } from "./styles";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { useTransactions } from "../../hooks/useTransactions";
import { FormatNumberInReal } from "../../utils/FormatValue";

export function Summary(){
    const {transactions} = useTransactions()

    console.log(transactions);

    const summary = transactions.reduce((acc, transaction)=>{
        if (transaction.type === 'deposit') {
            acc.deposit += transaction.amount
            acc.total += transaction.amount
            
        } else {
            acc.withdraw += transaction.amount
            acc.total -= transaction.amount            
        }
        return acc;        
    },{
        deposit: 0,
        withdraw: 0,
        total: 0,
    })
    
    return(
        <Conteiner>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>{FormatNumberInReal(summary.deposit)}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>- {FormatNumberInReal(summary.withdraw)}</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{FormatNumberInReal(summary.total)}</strong>
            </div>
        </Conteiner>
    )
}