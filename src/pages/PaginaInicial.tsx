import React from 'react';
import styled from 'styled-components';

const PaginaInicialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: #2A2A2A;
`;

const PaginaInicial: React.FC = () => {
  return (
    <PaginaInicialContainer>
      <img src="/LogoPagInicial.png" alt="Elektro Logo"></img>
      <Title>Elektro</Title>
    </PaginaInicialContainer>
  );
};

export default PaginaInicial;