import { EspacoLegenda, FotoJogo, NomeJogo, ObterWord, PrecoJogo, Publicacao } from "./styled";

type JogoInfo = {
    nome: string;
    foto: string;
    preco: string;
}

export default function IconeJogo( {nome, foto, preco}: JogoInfo ){
    return(
        <Publicacao>
            <FotoJogo src={foto} />
            <EspacoLegenda>
                <NomeJogo>{nome}</NomeJogo>
                <PrecoJogo>{preco}</PrecoJogo>
            </EspacoLegenda>
            
            <ObterWord>Obter</ObterWord> 
        </Publicacao>
    );
}