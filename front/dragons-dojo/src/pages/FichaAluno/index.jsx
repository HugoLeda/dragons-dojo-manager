import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "../../components/Header";
import api from "../../api/api";
import { FichaAlunoPage } from "./style";

const EMPTY_FORM = {
  name: "",
};

function toForm(student) {
  return {
    name: student.nome ?? "",
  };
}

export default function FichaAluno({ mode = "view" }) {
  const { id } = useParams();

  const isCreate = mode === "create";
  const readOnly = mode === "view";

  const [form, setForm] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(!isCreate);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isCreate) return;

    const controller = new AbortController();

    async function loadStudent() {
      try {
        const { data } = await api.get(`/api/alunos/${id}`, {
          signal: controller.signal,
        });
        setForm(toForm(data));
      } catch (err) {
        if (!axios.isCancel(err)) {
          console.error(err);
          setError(err.response?.data?.message || "Erro ao buscar aluno");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadStudent();

    return () => controller.abort();
  }, [id, isCreate]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <>
      <Header />
      <FichaAlunoPage>
        {loading && <p>Carregando...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && (
          <form>
            <fieldset disabled={readOnly}>
              <label>
                Nome completo
                <input name="name" value={form.name} onChange={handleChange} />
              </label>
            </fieldset>
          </form>
        )}
      </FichaAlunoPage>
    </>
  );
}