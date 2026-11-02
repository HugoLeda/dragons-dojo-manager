import { useEffect, useState } from "react";
import api from "../../api/api";

import BirthdayCard from "../../components/BirthdayCard";
import Header from "../../components/Header";
import QuickCard from "../../components/QuickCard";
import Modal from "../../components/PaymentModal";

import { Homepage } from "./style";

import { FaRegFile, FaWallet } from "react-icons/fa";
import { FaRegUser, FaHandFist, FaCakeCandles } from "react-icons/fa6";

const quickCards = [
  {
    icon: <FaRegUser style={{fontSize: 24, color: '#2b2b2b'}}/>,
    title: "Meus alunos",
    description: "Cadastrar e gerenciar matrículas",
    link:"/alunos"
  },
  {
    icon: <FaWallet style={{fontSize: 24, color: '#2b2b2b'}}/>,
    title: "Finanças",
    description: "Acompanhar pagamentos",
    link:"/"
  },
  {
    icon: <FaHandFist style={{fontSize: 24, color: '#2b2b2b'}}/>,
    title: "Modalidades",
    description: "Agenda de aulas e graduações",
    link:"/"
  },
  {
    icon: <FaRegFile style={{fontSize: 24, color: '#2b2b2b'}}/>,
    title: "Mensalidades",
    description: "Lançar novo pagamento",
    link: "open-payment-modal"
  }
]

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("pt-BR", { timeZone: "UTC" });

export default function Home() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [birthdays, setBirthdays] = useState([]);
  const [birthdaysLoading, setBirthdaysLoading] = useState(true);
  const [birthdaysError, setBirthdaysError] = useState(false);

  useEffect(() => {
    async function loadBirthdays() {
      try {
        const { data } = await api.get("/api/alunos/aniversarios", {
          params: { limite: 5 },
        });
        setBirthdays(data);
      } catch (error) {
        console.error(error);
        setBirthdaysError(true);
      } finally {
        setBirthdaysLoading(false);
      }
    }

    loadBirthdays();
  }, []);

  return (
    <>
      <Header/>
      <Homepage>
        <div className="quick-actions-title flex-column">
          <h1>Olá, sensei!</h1>
          <span>Acesso Rápido</span>
        </div>
        <section className="access flex">
          <div className="early-access flex">
            {quickCards.map((card) => (
              <QuickCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
                link={card.link}
                onClick={
                  card.link === "open-payment-modal"
                    ? () => setIsModalOpen(true)
                    : undefined
                }
              />
            ))}
          </div>

          <div className="upcoming-birthdays">
            <div className="upcoming-birthdays-title flex">
              <FaCakeCandles style={{color: "#E8BB1E"}} />
              <h2>Próximos aniversários</h2>
            </div>
            <div className="each-birthday flex">
              {birthdaysLoading && <p>Carregando...</p>}

              {birthdaysError && <p>Não foi possível carregar os aniversários.</p>}

              {!birthdaysLoading && !birthdaysError && birthdays.length === 0 && (
                <p>Nenhum aniversário próximo.</p>
              )}

              {birthdays.map((student) => (
                <BirthdayCard
                  key={student._id}
                  name={student.nome}
                  date={formatDate(student.proximoAniversario)}
                  age={student.idade}
                />
              ))}
            </div>
          </div>
        </section>
        
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </Homepage>
    </>
  )
}