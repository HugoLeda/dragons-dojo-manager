import QuickCard from "../../components/QuickCard";

import { Homepage } from "./style";

import { FaRegFile, FaWallet } from "react-icons/fa";
import { FaRegUser, FaHandFist } from "react-icons/fa6";


const quickCards = [
  {
    icon: <FaRegUser style={{fontSize: 24, color: '#2b2b2b'}}/>,
    title: "Meus alunos",
    description: "Cadastrar e gerenciar matrículas",
  },
  {
    icon: <FaWallet style={{fontSize: 24, color: '#2b2b2b'}}/>,
    title: "Finanças",
    description: "Acompanhar pagamentos",
  },
  {
    icon: <FaHandFist style={{fontSize: 24, color: '#2b2b2b'}}/>,
    title: "Modalidades",
    description: "Agenda de aulas e graduações",
  },
  {
    icon: <FaRegFile style={{fontSize: 24, color: '#2b2b2b'}}/>,
    title: "Mensalidades",
    description: "Lançar novo pagamento",
  }
]

export default function Home() {
  return (
    <Homepage>
      <h1>Olá, sensei!</h1>
      <span>Acesso Rápido</span>
      <div className="early-acess flex">
        {quickCards.map((card) => (
          <QuickCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />  
        ))}
      </div>
    </Homepage>
  )
}