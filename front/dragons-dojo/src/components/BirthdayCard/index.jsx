import styled from "styled-components"
import Theme from "../../styles/theme"
import { FaRegUser } from "react-icons/fa6"

const Card = styled.div `
  background-color: ${Theme.colors.matteWhite};
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 20px;


  .card {
    gap: .5rem;
  }

  .icon {
    padding-top: .5rem;
    align-items: center;
  }

  
  p {
    font-size: ${Theme.textSize.textMd};
  }
`

export default function BirthdayCard({ name, date }) {
  return (
    <Card>
      <div className="card flex">
        <div className="icon"><FaRegUser/></div>
        <div>
          <p>{name}</p>
          <span>{date} - X anos</span>
        </div>
      </div>
    </Card>
  )
}