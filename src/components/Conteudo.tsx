import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 400;
  color: #000000;
  margin-bottom: 20px;
`;

const Text = styled.h5`
  color: #2B2B2B;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  border-radius: 16px;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 0.8rem;
  margin: 5px 0;
  width: 200px;
`;

const Cadastrar = styled(Button)`
  background-color: #2B2B2B;
  color: #F5F5F5;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Login = styled(Button)`
  background-color: #F5F5F5;
  color: #2B2B2B;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Conteudo: React.FC = () => {
  return (
    <Container>
      <Title>Opsss...</Title>
      <img src='/Error.png'></img>
      <Text>Infelizmente, parece que você ainda não está logado.</Text>
      <Cadastrar><Link to="/cadastro">Cadastrar</Link></Cadastrar>
      <Login><Link to="/entrar">Fazer login</Link></Login>
    </Container>
  );
};

export default Conteudo;