import { AlunosPage } from "./style";

import Header from "../../components/Header";

export default function Alunos() {
  return (
    <>
      <Header/>
      <AlunosPage>
        <div>
          <h1>Meus alunos</h1>
        </div>
        <div className="table flex">
          <h3>Filtros</h3>
          <button>Novo</button>
        </div>
      </AlunosPage>
    </>
  );
}