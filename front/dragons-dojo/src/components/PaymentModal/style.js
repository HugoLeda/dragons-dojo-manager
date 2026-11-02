import styled from "styled-components";
import Theme from "../../styles/theme";

export const PaymentComponent = styled.div `

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 25%;
    padding: 1.5rem;
    width: 30vw;
    height: 400px;
    z-index: 100;
    background-color: #fff;
    border-radius: 20px;
    justify-content: space-between;

    
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .student-name select,
  .payment-date input,
  .payment-value input,
  .payment-type select {
    height: 25px;
    background-color: ${Theme.colors.gray3};
    border-radius: 5px;
    border: none;
    color: ${Theme.colors.gray2};
    padding: .25rem;
  }

  .method-checkbox-group label {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: .25rem;
    gap: .25rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    padding: .5rem;
    gap: .25rem;
  }

  .modal-date-payment,
  .modal-payment-method {
    justify-content: space-between;

    .form-group {
      width: 180px;
    }
  }


  .modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: .5rem;
  }

  
  h2 {
    font-size: ${Theme.textSize.textSm};
    color: ${Theme.colors.gray2};
  }

  button {
    height: 32px;
    padding: 0 .5rem;
    border-radius: 5px;
    cursor: pointer;
  }

  .btn-save {
    background-color: ${Theme.colors.yellow};
    color: ${Theme.colors.white};
    border: none;
  }

  
  .btn-cancel {
    background-color: ${Theme.colors.gray2};
    color: ${Theme.colors.white};
    border: none;
  }




`