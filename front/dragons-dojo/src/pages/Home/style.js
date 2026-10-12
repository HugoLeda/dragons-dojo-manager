import styled from "styled-components";
import Theme from "../../styles/theme";

export const Homepage = styled.div ` 

  padding: 0 10%;
  
  .flex {
    display: flex;
  }

  .access {
    justify-content: space-between;
  }

  .early-access {
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;

    background-color: ${Theme.colors.gray3};

    width: 60%;
    padding: 16px;

    border-radius: 20px;
  }

  .next-birthdays {
    flex-direction: column;

    background-color: ${Theme.colors.gray3};

    width: 35%;
    padding: 16px;

    border-radius: 20px;
  }

  h1 {
    font-size: ${Theme.textSize.titleSm};
    font-weight: 500;
  }

  p {
    font-size: ${Theme.textSize.textSm};
  }
`