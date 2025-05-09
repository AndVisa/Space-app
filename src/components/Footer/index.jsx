import styled from "styled-components"


const FooterEstilizado = styled.footer`
    display: flex;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    justify-content: space-between;
    align-items: center;
    padding: 22px;
    box-sizing: border-box;
`

const IconosRedes = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`

const TextoPie = styled.p`
    font-size: 16px;
    color: #FFFFFF;
    margin: 0;
`

const Footer = () => {
    return <FooterEstilizado>
        <IconosRedes>
            <li>
                <a>
                <img src="./imagenes/redes/facebook.svg" alt="Facebook" />
                </a>
            </li>
            <li>
                <a>
                    <img src="./imagenes/redes/instagram.svg" alt="Instagram" />
                </a>
            </li>
            <li>
                <a>
                    <img src="./imagenes/redes/twitter.svg" alt="Twitter" />
                </a>
            </li>

        </IconosRedes>
        <TextoPie> 
            Desarrollado por InnovateWeb Solutions
        </TextoPie>
    </FooterEstilizado>
}

export default Footer 