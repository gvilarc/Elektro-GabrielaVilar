import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PaginaInicial from './PaginaInicial';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';
import SocialMedia from '../components/SocialMedia';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Intro from '../components/Intro';


const HomeContainer = styled.div`
  padding-top: 60px; 
`;

const Home: React.FC = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!showMainContent) {
    return <PaginaInicial />;
  }

  return (
    <HomeContainer>
      <Header />
      <Intro />
      <CategoryList />
      <ProductList />
      <SocialMedia />
      <Footer />
    </HomeContainer>
  );
};

export default Home;