import { RegisterDiv, RegisterWord, FacebookImg, GoogleImg, AreaImg, CreateCont, LinhaTela, InputRegister, LegendaInput, RegisterDivInferior, CreateContButton, TelaSuperior, ImagemSaida } from "./style";
import googleIcon from '../../assets/Register/GoogleIcon.svg'
import faceIcon from '../../assets/Register/FacebookIcon.svg'
import IconSaida from '../../assets/Register/IconSaida.svg'
import { Link } from 'react-router-dom';

export default function Register(){

    return(
        <RegisterDiv>
            <TelaSuperior>
                <Link to="/"><ImagemSaida src={IconSaida}/> </Link>
                <RegisterWord>CADASTRE-SE</RegisterWord>
            </TelaSuperior>
            <CreateCont>Criar uma conta com...</CreateCont>
            <AreaImg>
                <FacebookImg src={faceIcon}/>
                <GoogleImg src={googleIcon} />
            </AreaImg>
            <LinhaTela/>

            <RegisterDivInferior>

                <LegendaInput>Nome:</LegendaInput>
                <InputRegister placeholder="Ex.: Ronaldo da Silva Pereira" />

                <LegendaInput>Nome do usuário:</LegendaInput>
                <InputRegister placeholder="Ex.: Ronaldo_021" />

                <LegendaInput>Email:</LegendaInput>
                <InputRegister placeholder="Ex.: name@gmail.com" />

                <LegendaInput>Senha:</LegendaInput>
                <InputRegister/>

               <Link to="/inicial"> <CreateContButton>Criar conta</CreateContButton> </Link>

            </RegisterDivInferior>
        </RegisterDiv>
    );
}