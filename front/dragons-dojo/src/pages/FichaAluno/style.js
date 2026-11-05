import styled from "styled-components";
import Theme from "../../styles/theme";

export const FichaAlunoPage = styled.main`

  background-color: #efefef;
  padding: 3rem 10%;
  
  .flex {
    display: flex;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  p {
    font-size: ${Theme.textSize.textSm};
    color: ${Theme.colors.gray2};
  }

  form,
  fieldset {
    gap: 2rem;
  }

  fieldset {
    border: none;
  }
  
  section {
    background-color: ${Theme.colors.white};
    padding: 1rem;
    gap: 1rem;
    border-radius: 10px;

    max-width: 80vw;
    height: 100%;
  }

  .form-field {
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    gap: 1rem;
  }

  #other-info {
    .form-field {
      justify-content: flex-start;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    font-size: ${Theme.textSize.textMobileMd};
  }

  .fill-name input {
    width: 300px;
  }

  .gender-options label {
    flex-direction: row;
  }
  
  .options label {
    flex-direction: row;
    padding: 0 1rem;
    gap: .25rem;
    align-items: center;
  }

  input {
    height: 40px;
  }

  input,
  textarea {
    font-size: ${Theme.textSize.textMobileSm};
    padding: .25rem .5rem;
    border-radius: 5px;
    border: 1px solid #ddd;
    background-color: ${Theme.colors.lightGray};
  }

  textarea {
    resize: vertical;
    min-height: 40px;
    max-height: 150px;
  }


  #action {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  .form-actions button {
    height: 40px;
    padding: .1rem 1rem 0;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    font-size: ${Theme.textSize.textMobileSm};
    margin: 0;
    align-items: center;
    gap: .25rem;
  }

  .form-actions .btn-cancel {    
    background-color: ${Theme.colors.gray2};
    color: ${Theme.colors.white};
  }

  .form-actions .btn-save {    
    background-color: ${Theme.colors.yellow};
    color: ${Theme.colors.white};
  }

`;