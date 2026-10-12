import BirthdayCard from "../../components/BirthdayCard";
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

const birthdayCards = [
  {
    name: "João da Silva",  
    date: "10/05/2024",
  },
  {     
    name: "Maria Oliveira",   
    date: "15/05/2024",
  }
]

export default function Home() {
  return (
    <Homepage>
      <h1>Olá, sensei!</h1>
      <span>Acesso Rápido</span>
      <section className="access flex">
        <div className="early-access flex">
          {quickCards.map((card) => (
            <QuickCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />  
          ))}
        </div>

        <div className="next-birthdays flex">
          <h1>Próximos Aniversários</h1>
          {birthdayCards.map((card) => (
            <BirthdayCard
              key={card.name}
              name={card.name}
              date={card.date}
            />
          ))}
        </div>
      </section>
    </Homepage>
  )
}