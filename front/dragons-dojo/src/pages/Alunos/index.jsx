import { useEffect, useState } from "react";
import axios from "axios";
import { AlunosPage } from "./style";

import Header from "../../components/Header";
import api from "../../api/api";
import {
  formatDate,
  formatModalities,
  normalizeText,
} from "../../utils/formatters";
import { FaMagnifyingGlass, FaPenToSquare, FaPlus } from "react-icons/fa6";

export default function Alunos() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadStudents() {
      try {
        const { data } = await api.get("/api/alunos", {
          signal: controller.signal,
        });

        const formatted = data.map((student) => ({
          id: student._id,
          name: student.nome,
          modalities: formatModalities(student.modalidades),
          createdAt: formatDate(student.createdAt),
        }));

        setStudents(formatted);
      } catch (err) {
        if (!axios.isCancel(err)) {
          console.error(err);
          setError(err.response?.data?.message || "Erro ao buscar alunos");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadStudents();

    return () => controller.abort();
  }, []);

  const filteredStudents = students.filter((student) =>
    normalizeText(student.name).includes(normalizeText(search))
  );

  return (
    <>
      <Header />
      <AlunosPage>
        <div className="students-header flex-column">
          <div className="students-title">
            <h1>Meus alunos</h1>
          </div>
          <div className="pre-table flex">
            <h3>Filtros</h3>
            <div className="searchbar flex">
              <FaMagnifyingGlass style={{color:"#E8BB1E"}}/>
              <input
                type="text"
                placeholder="Buscar por nome..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button className="flex"> <FaPlus style={{color: "#fff", fontSize: "12"}}/>Adicionar</button>
          </div>
        </div>

        <div className="table-content">
          <div>
            <table>
              <thead>
                <tr className="table-title">
                  <th>Nome completo</th>
                  <th>Modalidade(s)</th>
                  <th>Pagamento(s)</th>
                  <th style={{textAlign:"center"}}>Data de início</th>
                  <th style={{textAlign:"center"}}>Ação</th>
                </tr>
              </thead>

              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.modalities}</td>
                    <td></td>
                    <td style={{textAlign:"center"}}>{student.createdAt}</td>
                    <td className="flex" style={{gap: ".25rem", textAlign:"center"}}> 
                      <a href="/alunos" className="flex" style={{alignItems:"center"}}><FaPenToSquare style={{color: "#759dcc"}}/>Editar</a>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

            {filteredStudents.length === 0 && (
              <p className="no-results-found">
                Nenhum aluno encontrado.
              </p>
            )}
          </div>
          
        </div>
      </AlunosPage>
    </>
  );
}