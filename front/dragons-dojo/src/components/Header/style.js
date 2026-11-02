import styled from "styled-components";
import Theme from "../../styles/theme";


export const HeaderContainer = styled.header`
  background-color: #f9f9f9;
  padding: 1rem 10%;
  display: flex;

  .flex {
    display: flex;
  }

  .header {
    justify-content: space-between;
    width: 100%;
  }

  .header-links {
    align-items: center;
    gap: 1rem;
  }

  .profile {
    flex-direction: column;
  }

  h1 {
    font-size: ${Theme.textSize.titleSm};
  }
  span,p {
    margin: 0;
  }

  span {
    font-size: 12px;
  }
`