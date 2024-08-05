import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 10px;
  width: 200px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 10px;
`;

const Name = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 10px 0;
`;

const Price = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const ProductCard: React.FC<{ name: string; price: string; imgSrc: string }> = ({ name, price, imgSrc }) => {
  return (
    <Card>
      <Image src={imgSrc} alt={name} />
      <Info>
        <Name>{name}</Name>
        <PriceContainer>
          <Price>{price}</Price>
          <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.93716 4.03088C5.06428 4.03088 2.73535 6.35983 2.73535 9.23269C2.73535 14.4345 8.88294 19.1634 12.1932 20.2635C15.5034 19.1634 21.651 14.4345 21.651 9.23269C21.651 6.35983 19.3221 4.03088 16.4492 4.03088C14.6899 4.03088 13.1346 4.90427 12.1932 6.24108C11.2518 4.90427 9.69646 4.03088 7.93716 4.03088Z" stroke="#2B2B2B" stroke-width="1.89157" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </PriceContainer>
      </Info>
    </Card>
  );
};

export default ProductCard;