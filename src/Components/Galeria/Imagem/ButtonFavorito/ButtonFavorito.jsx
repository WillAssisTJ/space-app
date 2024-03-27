import { useState } from "react";
import styled from "styled-components";

const ButtonFavoritoStyled = styled.button`
  cursor: pointer;
  background-size: cover;
  border: none;
  padding: 0;
  background-color: transparent;
  background-image: url(${(props) => props.icon});
  width: 24px;
  height: 24px;
`;

const ButtonFavorito = ({ iconeAtivo, iconeInativo, ativo = false }) => {
  const [estaAtivo, setEstaAtivo] = useState(ativo);

  const alternaAtivo = () => {
    setEstaAtivo(!estaAtivo);
  };

  return (
    <ButtonFavoritoStyled
      icon={estaAtivo ? iconeAtivo : iconeInativo}
      onClick={alternaAtivo}
    />
  );
};

export default ButtonFavorito;
