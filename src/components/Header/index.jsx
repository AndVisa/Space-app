import styled from "styled-components"
import CampoTexto from "../CampoTexto"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
        img{
            width: 212px;
        }
`


const Header = () => {
    const {setConsulta} = useContext(GlobalContext);
    return <HeaderEstilizado>
        <img src="imagenes/logo.png" alt="Logo de Space App" />
        <CampoTexto setConsulta = {setConsulta} />
    </HeaderEstilizado>
}

export default Header 