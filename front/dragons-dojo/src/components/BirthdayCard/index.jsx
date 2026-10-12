import styled from "styled-components"
import Theme from "../../styles/theme"

const Card = styled.div `
  background-color: ${Theme.colors.matteWhite};
`

export default function BirthdayCard({ name, date }) {
  return (
    <Card>
      <div></div>
      <div>
        <p>{name}</p>
        <span>{date}</span><span>X anos</span>
      </div>
    </Card>
  )
}