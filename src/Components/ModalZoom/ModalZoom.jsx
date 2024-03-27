import styled from "styled-components";
import Imagem from "../Galeria/Imagem/Imagem";
import close from "../../assets/close.png";
import { useEffect, useState } from "react";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 294px;
  width: 1156px;
  height: 660.57px;
  background-color: transparent;
  border: none;
`;

const ButtonClosed = styled.button`
  position: absolute;
  margin-top: -790px;
  margin-left: 990px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const FormStyled = styled.form`
  
`

const ModalZoom = ({ foto, aoAlternarFavorito }) => {
  const [modalAberto, setModalAberto] = useState(false);

  useEffect(() => { 
    if (foto ) {
      setModalAberto(true)
    }
  }, [foto]);

  const fecharModal = () => {
    setModalAberto(false)
  }
  

  return (
    <>
      {foto && modalAberto && (
        <>
          <Overlay onClick={fecharModal} />
          <DialogEstilizado open={modalAberto}>
            <Imagem foto={foto} expandida={modalAberto} aoAlternarFavorito={aoAlternarFavorito} />
            <FormStyled method="dialog">
              <ButtonClosed onClick={fecharModal}>
                <img src={close} alt="fechar" />
              </ButtonClosed>
            </FormStyled>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};

export default ModalZoom;
