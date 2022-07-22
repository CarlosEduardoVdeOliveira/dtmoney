
import logoIMG from "../../assets/logo.svg";
import { Conteiner, Content } from "./styles";

interface HederProps{
    onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }:HederProps) {
  return (
    <Conteiner>
      <Content>
        <img src={logoIMG} alt="logo dtmoney" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Conteiner>
  );
}
