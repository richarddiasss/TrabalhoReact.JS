import NavBar from "../../components/NavBar";
import { AnuncioCreditos, AnuncioFrase, AreaJogosDiv, CategoriaJogosInitial, ButtonCategoria, CategoriasDiv, DescImg, EscolhaButton, EscolhaDiv, InitialDiv, TitleSessao, OutrasCategorias, AreaButtonCategoria, PagNumero} from "./style";
import desconto from '../../assets/initial/cupomIcon.svg'
import IconeJogo from "../../components/IconeJogo";
import JogoAnno from "../../assets/initial/Anno2205Img.jpg";
import Fifa2023 from "../../assets/initial/fifa2023.jpg";
import Immortals from "../../assets/initial/ImmortalsImg.jpg";
import Uno from "../../assets/initial/UnoFoto.png";
import Brawlhalla from "../../assets/initial/brawFoto.png";
import Fenyx from "../../assets/initial/HonorFoto.png";
import HandFoto from "../../assets/initial/HandFoto.png";
import RugbyFoto from "../../assets/initial/Rugby 20.png";



export default function Initial(){

    return(
        <InitialDiv>
            
            <NavBar/>
            <EscolhaDiv>
                <EscolhaButton>Jogos</EscolhaButton>
                <EscolhaButton>Peças para PC</EscolhaButton>
            
            </EscolhaDiv>
               
            <AnuncioCreditos>
            <AnuncioFrase>Gaste seus créditos G com cupons e brindes na plataforma.</AnuncioFrase>
            <DescImg src={desconto} />
            </AnuncioCreditos>

            <CategoriaJogosInitial>Categorias</CategoriaJogosInitial>
            <CategoriasDiv>
                <AreaButtonCategoria>
                    <ButtonCategoria>CO-OP</ButtonCategoria>
                    <ButtonCategoria>Arcade</ButtonCategoria>
                    <ButtonCategoria>Terror</ButtonCategoria>
                </AreaButtonCategoria>

                <OutrasCategorias>
                    <PagNumero> 1 </PagNumero>
                    <PagNumero> 2 </PagNumero>
                    <PagNumero> ... </PagNumero>

                </OutrasCategorias >
            </CategoriasDiv>

            <TitleSessao>Mais comprados...</TitleSessao>
            <AreaJogosDiv>
                <IconeJogo nome={"Anno 2205"} foto={JogoAnno} preco= {"R$ 29,99"}/>
                <IconeJogo nome={"Fifa 2023"} foto={Fifa2023} preco={"R$ 200,00"}/>
                <IconeJogo nome={"Immortals Fenyx Rising - Season Pass"} foto={Immortals} preco={"R$ 100,00"}/>
                <IconeJogo nome={"Uno  - Standard Edition"} foto={Uno} preco={"R$ 10,80"}/>
                <IconeJogo nome={"Brawlhalla - All Legends Pack"} foto={Brawlhalla } preco={"R$ 59,99"}/> 
                <IconeJogo nome={"Immortals Fenyx Rising - Season Pass"} foto={JogoAnno } preco={"R$ 100,00"}/>
               
            </AreaJogosDiv>

            <TitleSessao> Promoções... </TitleSessao>

            <AreaJogosDiv>
            <IconeJogo nome={"Rugby 20"} foto={RugbyFoto} preco={"R$ 29,99"}/>
            <IconeJogo nome={"Handball 17"} foto={HandFoto} preco={"R$ 1,89"}/>
            <IconeJogo nome={"Anno 2205"} foto={JogoAnno} preco={"R$ 29,99"}/>
            </AreaJogosDiv>


        </InitialDiv>
    );
}