import styled from 'styled-components';

const green = "#68dd39"
const darkBlack = "#16161b"
const lightBlack = "#1d1b22"

export const Container = styled.header`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  align-items: center;  
  width: 100%;
  min-height: 100%;
  background: ${darkBlack};
  overflow-y: scroll;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;  
  width: 100%;
  height: 350px;
  background: ${green};
  color: ${lightBlack};
  @media(max-width: 900px) {
    height: 400px;
  }
`

export const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 40%;
  @media(max-width: 900px) {
    width: 95%;
  }
  h1{
    color: ${lightBlack};
    font-size: 36px;
    margin: 10px;
    @media(max-width: 900px) {
      font-size: 27px;
    }
  }
  p{
    color: ${lightBlack};
    text-align: center;
    margin: 10px;
    @media(max-width: 900px) {
      font-size: 15px;
    }
  }
`

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  @media(max-width: 900px) {
    flex-direction: column;
  }
`

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: ${lightBlack};
  background-color: #fff;
  height: 50px;
  width: 200px;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin: 20px 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  transition: all ease-in-out 0.3s;
  &&:hover{
    -webkit-box-shadow: 2px 2px 19px -2px rgba(0,0,0,0.49);
    -moz-box-shadow: 2px 2px 19px -2px rgba(0,0,0,0.49);
    box-shadow: 2px 2px 19px -2px rgba(0,0,0,0.49);
  }
`

export const OutlineButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: transparent;
  border: 2px solid #fff;
  height: 50px;
  width: 200px;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  margin: 20px 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: #fff;
  transition: all ease-in-out 0.3s;
  &&:hover{
    color: ${lightBlack};
    background-color: #fff;
    -webkit-box-shadow: 2px 2px 19px -2px rgba(0,0,0,0.49);
    -moz-box-shadow: 2px 2px 19px -2px rgba(0,0,0,0.49);
    box-shadow: 2px 2px 19px -2px rgba(0,0,0,0.49);
  }
`

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-top:30px;
  text-align: justify;
  width: 50%;
  h2{
    color: #fff;
    font-size: 28px;
    margin-bottom: 30px;
  }
  p{
    color: #fff;
    text-align: center;
    margin: 10px 0px;
  }
`

export const PlaygroundItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  align-items: center;  
  width: 100%;
  margin: 0px 10px ;
`

export const PlaygroundTitle = styled.p`
  color: ${green} !important;
  font-size: 22px;
`

export const Input = styled.input`
  text-align: center;
  width: 50%;
  outline: none; 
  height: 40px;
  width: 300px;
  font-size: 20px;
  border-radius: 3px;
  border: none;
`

export const Output = styled.p`
  text-align: center;
  height: 40px;
  width: 300px;
  font-size: 14px;
  font-style: italic;
`
export const Footer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 80px;
  background: ${lightBlack};
  color: #fff;
  p{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    font-size: 13px;
    cursor: pointer;
  }
`