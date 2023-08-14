import {AreaBarraPesq, AreaUser, BarraPesq, CreditoImg, LogoAndWord, LogoCarrinho, LogoGG, LogoUSer, LupaImg, NavBarDiv, UserWord}  from "./style";
import LogoImg from '../../assets/initial/logo (2).svg'
import Lupa from '../../assets/initial/LupaIcon.svg'
import UserImg from '../../assets/initial/UserIcon.svg'
import Credito from '../../assets/initial/crédito G.svg'
import CarrinhoImg from '../../assets/initial/CarrinhoIcon.svg'
import { Link } from 'react-router-dom';

export default function NavBar(){
    return(
       <NavBarDiv>
            <Link to="/"> <LogoGG src={LogoImg} /> </Link>
            <AreaBarraPesq>
                <BarraPesq placeholder="pesquisar..."/>
                <LupaImg src={Lupa}/>
            </AreaBarraPesq>
            <AreaUser>
                <LogoAndWord>
                    <UserWord>User</UserWord>
                    <LogoUSer src={UserImg}/>
                </LogoAndWord> 
                
                <CreditoImg src={Credito}/>

            </AreaUser>

            <LogoCarrinho src={CarrinhoImg} />
            

       </NavBarDiv>
    );
}