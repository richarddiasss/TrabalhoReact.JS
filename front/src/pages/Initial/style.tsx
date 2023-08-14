import styled from 'styled-components';
import {global} from '../../globalStyle';

export const InitialDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #272727;
    
`

export const EscolhaDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 14vw;
    width: 100vw;
    height: 4.42vh;
    background: #474747;
    margin-top: 0px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`
export const EscolhaButton = styled.button`
    width: 30.37vw;
    height: 2.26vh;
    border-radius: 15px;
    background: #272727;
    color: #FFF;
    font-family: 'Inter';
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    
`
export const AnuncioCreditos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 91.58vw;
    height: 20.3vh;
    background: ${global.colors.roxo};

    margin-top: 2.15vh;
    border-radius: 15px;
`
export const AnuncioFrase = styled.p`
    color: #000;
    font-family: 'Inter';
    font-size: 22.682px;
    font-style: normal;
    font-weight: 700;

    padding: 10px;
    
`
export const DescImg = styled.img`
    width: 28px;
    height: 22.4px;
`

export const CategoriaJogosInitial = styled.h1`
    color: #FFF;
    font-family: 'Inter';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    margin-right: 60.74vw;
    margin-top: 1.61vh;
    margin-bottom: 0px;
`
export const CategoriasDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 92.52vw;
    height: 10.69vh;
    border-radius: 15px;
    background: #474747;
    row-gap: 2vh;

`
export const AreaButtonCategoria = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8.64vw;
    
`
export const ButtonCategoria = styled.button`
    width: 21.26vw;
    height: 3.88vh;
    border-radius: 15px;
    

    background: rgba(123, 123, 123, 0);
    border-color: black;

    color: #FFF;
    font-family: 'Inter';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    
   
    
`
export const OutrasCategorias = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;

    gap: 1.16vw;
    padding-right: 7.47vw;
    
    
`
export const PagNumero = styled.button `
    display: flex;
    justify-content: center;
    height: 1.8vh;
    width:  2.33vw;
    color: white;
    background: #474747;
    border: solid 1px black;
    
`

export const AreaJogosDiv = styled.div`

    display: flex;
    width: 96.26vw;
    overflow-x: auto;
    height: 17.81vh;
    align-items: center;
    gap: 7.47vw;
    
`

export const TitleSessao = styled.div`

    color: #FFF;
    font-family: 'Inter';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    padding-right: 47.89vw;
    margin-top: 2.15vh;
    margin-bottom: 0.6vh;

`

