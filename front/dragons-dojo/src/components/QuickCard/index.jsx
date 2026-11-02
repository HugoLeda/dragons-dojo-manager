import styled from "styled-components"
import Theme from "../../styles/theme"

const Card = styled.div `
  height: 150px;
  width: calc(50% - 16px);

  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  transition: linear all .2s;
  background-color: ${Theme.colors.matteWhite};
  color: ${Theme.colors.gray1};

  border-radius: inherit;

  user-select: none;

  &:hover {
    background-color: ${Theme.colors.yellow};
  }

  h3 {
      font-size: ${Theme.textSize.textLg};
  }

  p {
    font-size: ${Theme.textSize.textMobileSm};
  }
`

export default function QuickCard({icon, title, description}) {
  return (
    <Card>
      {icon}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Card>
  )
}