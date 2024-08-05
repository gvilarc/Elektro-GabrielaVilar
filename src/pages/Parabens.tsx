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
  padding: 20px;
`;

const Image = styled.img`
  width: 280px;
  height: 280px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #000;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
`;

const ArrowButton = styled(Link)`
  background-color: #E0E0E0;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 20px;
`;

const Parabens: React.FC = () => {
  return (
    <Container>
      <Image src="/Parabens.png" alt="Success" />
      <Title>Parabéns, você conseguiu!</Title>
      <Subtitle>Bem-vindo ao time de usuários e colaboradores Elektro.</Subtitle>
      <ArrowButton to="/entrar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18l6-6-6-6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </ArrowButton>
    </Container>
  );
};

export default Parabens;