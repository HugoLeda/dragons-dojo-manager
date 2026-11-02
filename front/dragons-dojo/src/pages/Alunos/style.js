import styled from "styled-components";
import Theme from "../../styles/theme";

export const AlunosPage = styled.div `
  background-color: ${Theme.colors.matteWhite};
  padding: 3rem 10%;
  width: 100%;

  .flex {
    display: flex;
  }  

  .pre-table {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
  }

  .searchbar {
    align-items: center;
    gap: .5rem;

    input {
      padding-left: .5rem;
      border-radius: 5px;
      border: 1px solid #ddd;
      height: 40px;
    }
  }
  
  button {
    height: 40px;
    padding: .1rem 1rem 0;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${Theme.colors.yellow};
    color: ${Theme.colors.white};
    border: none;
    font-size: ${Theme.textSize.textMobileSm};
    margin: 0;
    align-items: center;
    gap: .25rem;
  }

  table {
    background-color: ${Theme.colors.white};
    width: 100%;
    justify-content: space-between;

    border-radius: 5px;

    border-spacing: 0; 
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }

  th {
    text-align: left;
    padding: .5rem 1.5rem;
    background-color: ${Theme.colors.gray3};

    font-size: ${Theme.textSize.textMobileSm};
  }

  th:first-child {
    border-radius: 5px 0 0 0;
  }

  th:last-child {
    border-radius: 0 5px 0 0;
  }

  td {
    padding: 1rem 1.5rem;
    font-size: 13px;
    color: #444;
    border-bottom: 1px solid #ddd;
    a {
      gap: .15rem;
      text-decoration: none;
      color: ${Theme.colors.gray1};
    }
  }

  p {
    padding: 1rem;
    text-align: center;
  }

`