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
        <div>
          <h1>Meus alunos</h1>
        </div>
        <div className="table flex">
          <h3>Filtros</h3>
          <input
            type="text"
            placeholder="Buscar por nome"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Novo</button>
        </div>

        {/* Teste de integração: será substituído pela tabela */}
        {loading && <p>Carregando...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          <ul>
            {filteredStudents.map((student) => (
              <li key={student.id}>
                {student.name} | {student.modalities} | {student.createdAt}
              </li>
            ))}
            {filteredStudents.length === 0 && <p>Nenhum aluno encontrado.</p>}
          </ul>
        )}
      </AlunosPage>
    </>
  );
}