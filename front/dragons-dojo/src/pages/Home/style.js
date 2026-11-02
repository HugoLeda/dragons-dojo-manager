import styled from "styled-components";
import Theme from "../../styles/theme";

export const Homepage = styled.div ` 
  background-color: #efefef;
  padding: 3rem 10%;
  
  .flex {
    display: flex;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .quick-actions-title {
    gap: 2rem;
    span {
      font-size: ${Theme.textSize.textMd};
      padding-left: 1rem;
      margin-bottom: .5rem;
    }
  }

  .access {
    justify-content: space-between;
  }

  .early-access {
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    background-color: ${Theme.colors.gray3};

    width: 60%;
    padding: 1rem;

    border-radius: 20px;
  }

  .upcoming-birthdays {

    background-color: ${Theme.colors.gray3};
    max-height: 350px;
    width: 35%;
    padding: 16px;

    border-radius: 20px;
  }

  
  .upcoming-birthdays-title {
    align-items: center;
    gap: .5rem;
    padding-bottom: 1rem;
  }
  
  .each-birthday {
    flex-direction: column;
    gap: 1rem;

    max-height: calc(3 * 82px + 2 * 1rem);
    overflow-y: auto;
  }

  .each-birthday {
    overflow-y: auto;

    /* Firefox */
    scrollbar-width: thin;
    scrollbar-color: #909090 transparent;
  }

  /* Chrome, Edge e Safari */
  .each-birthday::-webkit-scrollbar {
    width: 6px;
  }

  .each-birthday::-webkit-scrollbar-track {
    background: transparent;
  }

  .each-birthday::-webkit-scrollbar-thumb {
    background-color: #909090;
    border-radius: 10px;
  }

  .each-birthday::-webkit-scrollbar-thumb:hover {
    background-color: ${Theme.colors.yellow};
  }



  h1 {
    font-size: ${Theme.textSize.titleMobileMd};
    font-weight: 500;
  }

  h2 {
    font-size: ${Theme.textSize.textLg};
  }

  p {
    font-size: ${Theme.textSize.textMobileSm};
  }
`