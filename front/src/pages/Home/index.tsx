import { CreateCont, ForgotPassWord, HomeButton, HomeDiv, InputArea, InputDiv, InputIcon, LoginWrite, NomeLogo} from "./style";
import emailIcon from '../../assets/home/ArrobaIcon.svg'
import passwwordIcon from '../../assets/home/PasswordIcon.svg'
import { Link } from 'react-router-dom';

export  default function Home() {
    return (
        <HomeDiv>
            <NomeLogo>GAKALU GAMES</NomeLogo>
            <LoginWrite>LOGIN</LoginWrite>
           <InputDiv>
                <InputIcon src= {emailIcon} />
                <InputArea placeholder="Email"/>

           </InputDiv>
           <InputDiv>
                <InputIcon src= {passwwordIcon} />
                <InputArea placeholder="Senha"/>
           </InputDiv>
           <Link to="/inicial" ><HomeButton>Entrar</HomeButton></Link>

           <Link to="/registro"style={{textDecoration: 'none'}}> <CreateCont>Criar conta.</CreateCont> </Link>
           <ForgotPassWord>Esqueceu a sua senha?</ForgotPassWord>
        </HomeDiv>

    );

}