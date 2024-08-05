import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const SectionTitle = styled.h2`
  text-align: start;
  margin-left: 20px;
  margin-bottom: 10px;
`;

const ProductListContainer = styled.div`
  padding: 20px;
`;

const Divider = styled.hr`
  width: 328px;
  margin: 10px auto;
  border: none;
  border-top: 1.5px solid #b9b9b9;
`;

const ProductSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ProductList: React.FC = () => {
  return (
    <ProductListContainer>
      <SectionTitle>Para você</SectionTitle>
      <Divider />
      <ProductSection>
        <ProductCard name="Smartphone" price="R$800,00" imgSrc='/Smartphone.png' />
        <ProductCard name="Capa de celular" price="R$20,00" imgSrc="/CapaDeCelular.png" />
      </ProductSection>

      <SectionTitle>Produtos em destaque</SectionTitle>
      <Divider />
      <ProductSection>
        <ProductCard name="Smart TV" price="R$1400,00" imgSrc="/SmartTV.png" />
        <ProductCard name="Monitor" price="R$750,00" imgSrc="/Monitor.png" />
      </ProductSection>

      <SectionTitle>Mais vendidos</SectionTitle>
      <Divider />
      <ProductSection>
        <ProductCard name="Smartphone" price="R$3200,00" imgSrc="/Smartphone2.png" />
        <ProductCard name="Smartwatch" price="R$900,00" imgSrc="Smartwatch.png" />
      </ProductSection>
    </ProductListContainer>
  );
};

export default ProductList;