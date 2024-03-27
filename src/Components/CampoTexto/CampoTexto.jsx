import styled from "styled-components";
import lupa from '../../assets/lupa.svg';

const ContainerStyled = styled.div`
  position: relative;
  display: inline-block;
`;

const CampoTextoStyled = styled.input`
  width: 602px;
  height: 56px;
  padding: 12px 16px;
  border: 2px solid #c98cf1;
  border-radius: 10px;
  background-color: transparent;
  box-sizing: border-box;
  font-size: 20px;
  line-height: 20px;
  font-family: "Gandhi Sans";
  color: #D9D9D9
`;

const IconeLupa = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const CampoTexto = ({busca, setBusca}) => {
  const handleInputChange = (event) => {
    setBusca(event.target.value)
  }
  return (
    <ContainerStyled>
      <CampoTextoStyled type="text" placeholder="O que você procura?" value={busca} onChange={handleInputChange}/>
      <IconeLupa src={lupa} alt="ícone de lupa"/>
    </ContainerStyled>
  );
};

export default CampoTexto;
