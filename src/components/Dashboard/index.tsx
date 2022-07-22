import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionTable";
import { Conteiner } from "./styles";

export function Dashboard(){
    return(
        <Conteiner>
            <Summary />
            <TransactionTable />
        </Conteiner>
    )
}