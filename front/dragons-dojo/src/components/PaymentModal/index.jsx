import { useEffect } from "react";
import { PaymentComponent } from "./style";


export default function Modal({ isOpen, onClose }) {

   useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <PaymentComponent>
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Incluir novo pagamento</h2>
          <div className="modal-form">
            <div className="form-group full-width student-name">
              <label>Nome do aluno</label>
              <select>
                <option>Buscar aluno...</option>
              </select>
            </div>
            <div className="modal-date-payment flex">
              <div className="form-group payment-date">
                <label>Data de pagamento</label>
                <input type="date" />
              </div>

              <div className="form-group payment-value">
                <label>Valor</label>
                <input type="text" placeholder="R$ -"/>
               
              </div>
            </div>

            <div className="modal-payment-method flex">
              <div className="form-group">
              <label>Forma de pagamento</label>

              <div className="method-checkbox-group flex-column">
                <label><input type="checkbox" /> Dinheiro</label>
                <label><input type="checkbox" /> PIX</label>
                <label><input type="checkbox" /> Outro</label>
              </div>
            </div>

            <div className="form-group payment-type">
              <label>Tipo de pagamento</label>

              <select>
                <option>Selecionar opção</option>
                <option>Mensalidade</option>
                <option>Graduação</option>
                <option>Venda de produto</option>
                <option>Outros eventos</option>
              </select>
            </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              className="btn-cancel"
              onClick={onClose}
              type="button"
            >
              Cancelar
            </button>

            <button
              className="btn-save"
              type="button"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </PaymentComponent>
  );
}