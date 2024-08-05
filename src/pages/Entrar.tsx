import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const Logo = styled.img`
  width: 280px;
  height: 280px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 60px;
  border: none;
  border-radius: 16px;
  background-color: #000;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
`;

const LinkText = styled(Link)`
  margin-top: 10px;
  color: #000;
  font-size: 0.875rem;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin: 20px 0;
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


const Entrar: React.FC = () => {
    return (
        <Container>
            <Header>
                <BackButton to="/">&#8592;</BackButton>
                <Title>Entrar</Title>
            </Header>
            <Logo src="/LogoPagInicial.png" alt="Logo" />
            <Form>
                <Input type="email" placeholder="Digite seu e-mail" />
                <Input type="password" placeholder="Digite sua senha" />
                <LinkText to="/esqueci-minha-senha">Esqueci minha senha</LinkText>
                <Button type="submit">Entrar</Button>
            </Form>
            <Divider>
                <Line />
                <OrText>ou</OrText>
                <Line />
            </Divider>
            <SocialContainer>
                <SocialButton>
                    <img src="/Facebook.png" alt="Facebook" ></img>
                </SocialButton>
                <SocialButton>
                    <img src="/Google.png" alt="Google" ></img>
                </SocialButton>
            </SocialContainer>
            <LinkText to="/cadastro">Não possui cadastro? Cadastre-se!</LinkText>
        </Container>
    );
};

export default Entrar;