import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Conteudo from '../components/Conteudo';

const Container = styled.div`
  padding-top: 60px; 
`;

const ErroMenu: React.FC = () => {
    return (
      <Container>
        <Conteudo />
        <Footer />
      </Container>
    );
  };
  
  export default ErroMenu;