import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  padding-top: 20px;  
`;

const Title = styled.h2`
  text-align: begin;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 10px 0;
  justify-content: center; 
`;

const CategoryItem = styled.button`
  width: 80px; 
  text-align: center;
  border: none;
  background-color: transparent;
`;

const CategoryIcon = styled.img`
  width: 50px;
  height: 50px;
  background-color: #ddd;
  border-radius: 50%;
  margin: 0 auto;
`;

const CategoryList: React.FC = () => {
  return (
    <Container>
      <Title>Categorias Elektro</Title>
      <Categories>
        <CategoryItem>
          <CategoryIcon src='/Celulares.png'/>
          <p>Celulares</p>
        </CategoryItem>
        <CategoryItem>
          <CategoryIcon src='/Notebooks.png' />
          <p>Notebooks</p>
        </CategoryItem>
        <CategoryItem>
          <CategoryIcon src='/Tablets.png'/>
          <p>Tablets</p>
        </CategoryItem>
        <CategoryItem>
          <CategoryIcon src='/Perifericos.png'/>
          <p>Periféricos</p>
        </CategoryItem>
        <CategoryItem>
          <CategoryIcon src='TVs.png'/>
          <p>TVs</p>
        </CategoryItem>
        <CategoryItem>
          <CategoryIcon src='Acessorios.png'/>
          <p>Acessórios</p>
        </CategoryItem>
        <CategoryItem>
          <CategoryIcon src='PCs.png'/>
          <p>PCs</p>
        </CategoryItem>
        <CategoryItem>
          <CategoryIcon src='Smartwatches.png'/>
          <p>Smartwatches</p>
        </CategoryItem>
      </Categories>
    </Container>
  );
};

export default CategoryList;