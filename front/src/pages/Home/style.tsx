import styled from 'styled-components';
import {global} from '../../globalStyle';

export const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;

    align-items: center;
    justify-content: center;
    background: ${global.colors.roxo};

`;

export const NomeLogo = styled.h1`
    font-size: 40px;
    font-weight: 400;
    color: white; 
    font-family: 'Moul';
`

export const LoginWrite = styled.h2`
    font-size: 48.8px;
    font-weight: 700;
    color: white;
    font-family: 'Inter';
    padding-right: 37.38vw;
    margin-bottom: 1.51vw;
`



export const InputDiv = styled.div`
    display: flex;
    align-items: center;
    width: 73.83vw;
    height: 5.39vh;
    background: white;
    outline: none;
    border: none;
    border-radius: 10px;
    margin-top: 1.61vh;

    

`
export const InputIcon = styled.img`
    width: 30px;    
    height:  20px; 

    margin-left: 1.86vw;
    
`

export const InputArea = styled.input`
    display: flex;
    width: 100%;
    height: 90%;

    outline: none;
    border: none;
    border-radius: 10px;

    background: white;
    font-size: 16px;
    font-weight: 400;

`

export const HomeButton = styled.button`
    width: 19.85vw;
    height: 5.07vh;
    background: rgba(123, 123, 123, 0);
    border-radius: 10px;
    border-color: black;

    color: #FFF;
    font-family: Inter;
    font-size: 17.727px;
    font-style: normal;
    font-weight: 700;
    line-height: normal; 

    margin-top: 1.61vh;
    &:hover{
        cursor: pointer;
        background: blue;
    }

`


export const CreateCont = styled.p`
    color: white;
    font-family: 'Inter';
    font-size: 20.693px;
    font-style: normal;
    font-weight: 700;
    margin-top: 2.15vh;
    margin-bottom: 1.07vh;
    padding-right: 46.72vw;
    text-decoration: none;

`

export const ForgotPassWord = styled.p`
    color: white;
    font-family: 'Inter';
    font-size: 20.693px;
    font-style: normal;
    font-weight: 700;
    margin: 0px; 
    padding-right: 19.15vw;
`

