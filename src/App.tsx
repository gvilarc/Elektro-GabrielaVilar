import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import ErroMenu from './pages/ErroMenu';
import Cadastro from './pages/Cadastro';
import Parabens from './pages/Parabens';
import Entrar from './pages/Entrar';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  padding-bottom: 60px; // Para evitar que o conteúdo fique sob o footer
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/erro-menu" element={<ErroMenu />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/" element={<Cadastro />} />
            <Route path="/parabens" element={<Parabens />} />
            <Route path="/entrar" element={<Entrar />} />
          </Routes>
        </Content>
      </AppContainer>
    </Router>
  );
};

export default App;