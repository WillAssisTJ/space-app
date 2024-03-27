import styled from "styled-components";
import CampoTexto from "../CampoTexto/CampoTexto";

const HeaderStyled = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;

const Header = ({busca, setBusca}) => {
  return (
    <> 
      <HeaderStyled>
        <img src="/imagens/logo.svg" alt="logo" />
        <CampoTexto  busca={busca} setBusca={setBusca}/>
      </HeaderStyled>
      
    </>
  );
};

export default Header;
