import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
  padding: 0 20px 20px 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const BackButton = styled(Link)`
  margin-right: auto;
  font-size: 1.5rem;
  color: #000;
  text-decoration: none;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #000;
  text-align: center;
  flex-grow: 1;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin-bottom: 20px;
`;

const SocialButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px 0;
`;

const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: #000;
`;

const OrText = styled.span`
  margin: 0 10px;
  color: #000;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: #2B2B2B;
  color: #F5F5F5;
  font-size: 1rem;
  cursor: pointer;
`;

const Cadastro: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Adicione sua lógica de submissão aqui
        navigate('/parabens');
    };

    return (
        <Container>
            <Header>
                <BackButton to="/">&#8592;</BackButton>
                <Title>Cadastrar-se</Title>
            </Header>
            <SocialContainer>
                <SocialButton>
                    <img src="/Facebook.png" alt="Facebook" ></img>
                </SocialButton>
                <SocialButton>
                    <img src="/Google.png" alt="Google" ></img>
                </SocialButton>
            </SocialContainer>
            <Divider>
                <Line />
                <OrText>ou</OrText>
                <Line />
            </Divider>
            <Form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Nome" />
                <Input type="text" placeholder="CPF" />
                <Input type="text" placeholder="Telefone" />
                <Input type="email" placeholder="E-mail" />
                <Input type="password" placeholder="Senha" />
                <Input type="password" placeholder="Confirme sua senha" />
                <Button type="submit">Cadastrar-se!</Button>
            </Form>
        </Container>
    );
};

export default Cadastro;