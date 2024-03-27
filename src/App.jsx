import React, { useState, useEffect } from "react";
import styled from "styled-components";
import EstilosGlobais from "./Components/EstilosGlobais";
import Header from "./Components/Header/header";
import BarraLateral from "./Components/BarraLateral/BarraLateral";
import Banner from "./Components/Banner/Banner";
import banner from "../src/assets/banner.png";
import Galeria from "./Components/Galeria/Galeria";
import fotos from "./FotoArray.jsx";
import ModalZoom from "./Components/ModalZoom/ModalZoom.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;
const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [busca, setBusca] = useState("");
  const [noResultsFound, setNoResultsFound] = useState(false);
  const [tag, setTag] = useState(null);

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita,
      });
    }
    setFotosDaGaleria(
      fotosDaGaleria.map((fotosDaGaleria) => {
        return {
          ...fotosDaGaleria,
          favorita:
            fotosDaGaleria.id === foto.id
              ? !foto.favorita
              : fotosDaGaleria.favorita,
        };
      })
    );
  };

  useEffect(() => {
    if (busca && busca.length > 1) {
      const fotosFiltradas = fotos.filter((foto) =>
        foto.titulo.toLowerCase().includes(busca.toLowerCase())
      );
      setFotosDaGaleria(fotosFiltradas);
      setNoResultsFound(fotosFiltradas.length === 0);
    } else {
      setFotosDaGaleria(fotos);
      setNoResultsFound(false);
    }
  }, [busca]);

  useEffect(() => {
    if (tag) {
      const fotosFiltradas = fotos.filter((foto) => foto.tagId === tag);
      setFotosDaGaleria(fotosFiltradas);
      setNoResultsFound(fotosFiltradas.length === 0);
    } else {
      setFotosDaGaleria(fotos);
      setNoResultsFound(false);
    }
  }, [tag]);

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Header busca={busca} setBusca={setBusca} />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              backgroundImage={banner}
              texto="A galeria mais completa de fotos do espaço!"
            />
            <Galeria
              aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
              fotos={fotosDaGaleria}
              aoAlternarFavorito={aoAlternarFavorito}
              noResultsFound={noResultsFound}
              busca={busca}
              setTag={setTag}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        foto={fotoSelecionada}
        aoAlternarFavorito={aoAlternarFavorito}
      />
      <Footer />
    </FundoGradiente>
  );
};

export default App;
