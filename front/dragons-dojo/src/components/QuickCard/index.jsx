import styled from "styled-components"
import Theme from "../../styles/theme"
import { Link } from "react-router-dom"

const Card = styled.div`

  width: calc(50% - 16px);
  gap: 1rem;
  transition: linear all .2s;
  background-color: ${Theme.colors.matteWhite};
  border-radius: inherit;
  user-select: none;

  a {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: ${Theme.colors.gray1};
    text-decoration: none;
    gap: .8rem;
    height: 150px;
    padding: 1rem;
  }

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

export default function QuickCard({
  icon,
  title,
  description,
  link,
  onClick
}) {

  return (
    <Card>
      {onClick ? (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
        >
          {icon}
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </a>
      ) : (
        <Link to={link}>
          {icon}
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </Link>
      )}
    </Card>
  )
}