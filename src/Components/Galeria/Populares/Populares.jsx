import Titulo from "../../Titulo/Titulo";
import PopularesArray from "../../../PopularesArray.jsx";
import styled from "styled-components";
import { useState } from "react";

const ContainerPoupular = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const ImgStyled = styled.img`
    max-width: 212px;
    height: 158px;
    border-radius: 20px;
`

const ButtonVer = styled.button`
    width: 208px;
    height: 56px;
    border-radius: 10px;
    border: 2px solid #C98CF1;
    background-color: transparent;
    font-family: Gandhi Sans;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
    cursor: pointer;
`

const Populares = () => {
    const [showAll, setShowAll] = useState(false)

    const toggleShowAll = () => {
        setShowAll(!showAll)
    };

  return (
    <ContainerPoupular>
      <Titulo $alinhamento="center">Populares</Titulo>
       {PopularesArray.slice(0, showAll ? PopularesArray.length : 5).map((popular) => (
        <ImgStyled key={popular.id} src={popular.path} />
        ))}
        {PopularesArray.length > 5 && (
      <ButtonVer onClick={toggleShowAll}>{showAll ? 'Mostrar menos' : 'Mostrar mais'}</ButtonVer>
      )}
    </ContainerPoupular>
  );
};
export default Populares;
