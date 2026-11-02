import { HeaderContainer } from "./style";

import { FaRegBell, FaRegUser } from "react-icons/fa6";

export default function Header() {
  return (
    <>
    <HeaderContainer>
      <div className=" header flex">
        <div className="header-links flex">
          <h1> <a href="/" style={{textDecoration:"none", color:"#000"}}>Dragons Dojo</a></h1>
        </div>

        <div className=" header-links flex">
          <a href="/">Home</a>
          <a href="/alunos">Alunos</a>
          <FaRegBell style={{color: "#E8BB1E"}} />
          |
          <FaRegUser style={{color: "#E8BB1E"}} />
          <div className="profile flex">
            <span>Meu Perfil</span>
            <p>Administrador</p>
          </div>
        </div>
      </div>
    </HeaderContainer>
    </>
  )
}