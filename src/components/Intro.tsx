import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  padding-top: 20px;  
  text-align: center;
`;

const Title = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
    width: 42px;
    heigth: 42px;
    top: 117.5px;
    left: 28px;
`;

const Text = styled.h5`
    color: #FF8F0E;
    font-size: 1.5rem;
    weigth: 400;
`;

const Divider = styled.hr`
  width: 328px;
  margin: 10px auto;
  border: none;
  border-top: 1.5px solid #b9b9b9;
`;

const Intro: React.FC = () => {
    return (
        <Container>
            <Title>
                <Image src='/logoElektro.png'></Image>
                <Text>Bem-vindo à Elektro!</Text>
            </Title>
            <img src='/Intro.png'></img>
            <Divider />
        </Container>
    );
};

export default Intro;
