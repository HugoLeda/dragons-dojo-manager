import styled from "styled-components"
import Theme from "../../styles/theme"

const Card = styled.div `
  height: 150px;
  width: calc(50% - 16px);

  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  transition: linear all .2s;
  background-color: ${Theme.colors.matteWhite};
  color: ${Theme.colors.gray1};

  border-radius: inherit;

  user-select: none;

  &:hover {
    background-color: ${Theme.colors.yellow};
  }

  p {
      font-size: ${Theme.textSize.textMd};
  }

  span {
    font-size: ${Theme.textSize.textMobileSm};
  }
`

export default function QuickCard({icon, title, description}) {
  return (
    <Card>
      {icon}
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>
    </Card>
  )
}