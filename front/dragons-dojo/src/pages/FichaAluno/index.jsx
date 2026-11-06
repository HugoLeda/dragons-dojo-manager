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
          <form className="flex-column">
            <h1>Cadastro de aluno</h1>
            <fieldset disabled={readOnly} className="flex-column">
              <section id="personal-info" className="form-section flex-column">
                {/* INFORMAÇÕES PESSOAIS */}
                <p className="section-title">Informações pessoais</p>
                <div className="form-field flex">
                  <label for="foto">
                    Foto do aluno
                    <input type="file" id="foto" name="foto" accept="image/*"
                    />
                  </label>
                  <label className="fill-name">
                    Nome completo
                    <input type="text"
                      name="name"
                      value={form.name || ""}
                      onChange={handleChange}
                      placeholder="Digite o nome completo..."    
                    />
                  </label>

                  <label className="fill-name">
                    Nome social
                    <input
                      type="text"
                      name="socialName"
                      value={form.socialName || ""}
                      onChange={handleChange}
                      placeholder="Digite o nome social (se houver) ..."
                    />
                  </label>
                </div>              
                <div className="form-field flex">
                  <label>
                    Data de nascimento
                    <input
                      type="date"
                      name="birthDate"
                      value={form.birthDate || ""}
                      onChange={handleChange}
                    />
                  </label>

                  <div className="form-field">
                    <span>Gênero</span>

                    <div className="options flex">
                      {["Feminino", "Masculino", "Outro"].map((item) => (
                        <label key={item} className="option">
                          <input
                            type="radio"
                            name="gender"
                            value={item}
                            checked={form.gender === item}
                            onChange={handleChange}
                          />
                          {item}
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="section-title">Redes Sociais</p>
                    <label className="fill-name">
                      Instagram
                      <input
                        type="text"
                        name="socialName"
                        value={form.socialName || ""}
                        onChange={handleChange}
                        placeholder="Usuário do instagram..."
                      />
                    </label>
                  </div>
                </div>
              </section>
              {/* DOCUMENTOS E CONTATO */}
              <section id="document-contact" className="form-section flex-column">
                <p className="section-title">Documentos e Contato</p>

                <div className="form-field three-columns flex">
                  <label>
                    CPF
                    <input
                      type="text"
                      name="cpf"
                      value={form.cpf || ""}
                      onChange={handleChange}
                      placeholder="000.000.000-00"
                    />
                  </label>

                  <label>
                    RG
                    <input
                      type="text"
                      name="rg"
                      value={form.rg || ""}
                      onChange={handleChange}
                      placeholder="00.000.000-0"
                    />
                  </label>

                  <label>
                    Telefone
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone || ""}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                    />
                  </label>

                  <label>
                    Telefone do responsável
                    <input
                      type="tel"
                      name="guardianPhone"
                      value={form.guardianPhone || ""}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                    />
                  </label>

                  <label>
                    Data de início
                    <input
                      type="date"
                      name="startDate"
                      value={form.startDate || ""}
                      onChange={handleChange}
                    />
                  </label>

                  <div className="form-field">
                    <span>Status</span>

                    <div className="options flex">
                      {["Ativo", "Inativo"].map((item) => (
                        <label key={item} className="option">
                          <input
                            type="radio"
                            name="status"
                            value={item}
                            checked={form.status === item}
                            onChange={handleChange}
                          />
                          {item}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              {/* OUTRAS INFORMAÇÕES */}
              <section id="other-info" className="form-section flex-column">
                <p className="section-title">Outras informações</p>

                <div className="form-field flex">
                  <span>Modalidade(s)</span>

                  <div className="options flex">
                    {["Crossfit", "Karate", "Kobudo", "Muay Thai"].map(
                      (item) => (
                        <label key={item} className="option">
                          <input
                            type="checkbox"
                            name="modalities"
                            value={item}
                            checked={(form.modalities || []).includes(item)}
                            onChange={handleChange}
                          />
                          {item}
                        </label>
                      )
                    )}
                  </div>
                </div>

                <label className="medical-field">
                  Informações médicas
                  <textarea
                    name="medicalInfo"
                    value={form.medicalInfo || ""}
                    onChange={handleChange}
                    placeholder="Alergias, medicamentos em uso, condições de saúde..."
                    rows={4}
                  />
                </label>
              </section>
            </fieldset>
            <div id="action" className="form-actions flex">
              <p>Campos obrigatórios *</p>
              <button type="button" className="btn-cancel">Cancelar</button>
              {!readOnly && (
                <button type="submit" className="btn-save">Salvar alterações</button>
              )}
            </div>
          </form>
        )}
      </FichaAlunoPage>
    </>
  );
}