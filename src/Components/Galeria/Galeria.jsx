import Tags from "./Tags/Tags.jsx"
import Populares from "./Populares/Populares.jsx"
import Imagem from "./Imagem/Imagem.jsx"
import Titulo from "../Titulo/Titulo.jsx"
import styled from "styled-components"


const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`
const ErroPesquisa = styled.p`
    font-family: 'Gandhi Sans';
    font-size: 20px;
    color: #ffffff;
`
const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito, noResultsFound, busca, setTag  }) => {
    return (
        <>
            <Tags setTag={setTag}/>
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map(foto => <Imagem 
                            aoZoomSolicitado={aoFotoSelecionada}
                            aoAlternarFavorito={aoAlternarFavorito }
                            key={foto.id} 
                            foto={foto} />)
                        }
                    </ImagensContainer>
                   {noResultsFound && <ErroPesquisa>Nenhuma foto encontrada com o título "{busca}".</ErroPesquisa>}
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria