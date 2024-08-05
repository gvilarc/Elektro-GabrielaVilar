import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #2B2B2B;
  padding: 10px 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Logo = styled.img`
  height: 40px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #F5F5F5;
  border-radius: 20px;
  padding: 8px 16px;
  flex: 1;
  margin: 0 20px;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  flex: 1;
  margin-left: 5px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const IconImage = styled.img`
  width: 24px;
  height: 24px;
`;

const MenuContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${props => (props.isOpen ? '0' : '-100%')};
  height: 100%;
  width: 250px;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  transition: left 0.3s ease;
  z-index: 1001;
`;

const MenuHeader = styled.div`
  background-color: #333;
  color: #fff;
  padding: 15px;
  display: flex;
  align-items: center;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  padding: 15px;
  border-bottom: 1px solid #ccc;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <HeaderContainer>
        <IconButton onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18H21" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3 12H21" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3 6H21" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </IconButton>
        <SearchContainer>
          <IconButton>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#2B2B2B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20.9999 20.9999L16.6499 16.6499" stroke="#2B2B2B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </IconButton>
          <SearchInput placeholder="Encontrar na Elektro" />
        </SearchContainer>
        <IconButton>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#F5F5F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </IconButton>
      </HeaderContainer>

      <MenuContainer isOpen={menuOpen}>
        <MenuHeader>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.12 0.666748C6.75595 0.666748 0.786621 6.63608 0.786621 14.0001C0.786621 21.3641 6.75595 27.3334 14.12 27.3334C21.484 27.3334 27.4533 21.3641 27.4533 14.0001C27.4533 6.63608 21.484 0.666748 14.12 0.666748ZM9.45329 9.33341C9.45329 8.72058 9.57399 8.11374 9.80852 7.54756C10.043 6.98137 10.3868 6.46692 10.8201 6.03358C11.2535 5.60024 11.7679 5.2565 12.3341 5.02198C12.9003 4.78746 13.5071 4.66675 14.12 4.66675C14.7328 4.66675 15.3396 4.78746 15.9058 5.02198C16.472 5.2565 16.9864 5.60024 17.4198 6.03358C17.8531 6.46692 18.1969 6.98137 18.4314 7.54756C18.6659 8.11374 18.7866 8.72058 18.7866 9.33341C18.7866 10.5711 18.295 11.7581 17.4198 12.6332C16.5446 13.5084 15.3576 14.0001 14.12 14.0001C12.8823 14.0001 11.6953 13.5084 10.8201 12.6332C9.94495 11.7581 9.45329 10.5711 9.45329 9.33341ZM5.15729 19.7867C7.35595 17.9894 10.5666 16.6667 14.12 16.6667C17.6733 16.6667 20.884 17.9894 23.0826 19.7867C22.1161 21.2849 20.7892 22.5167 19.2234 23.3693C17.6575 24.2218 15.9028 24.6679 14.12 24.6667C12.3371 24.6679 10.5824 24.2218 9.01654 23.3693C7.45071 22.5167 6.12379 21.2849 5.15729 19.7867Z" fill="#2B2B2B" />
          </svg>
          <span>Usuário</span>
        </MenuHeader>
        <MenuList>
          <MenuItem><Link to="/erro-menu">Editar dados</Link></MenuItem>
          <MenuItem><Link to="/erro-menu">Meus pedidos</Link></MenuItem>
          <MenuItem><Link to="/erro-menu">Meus produtos</Link></MenuItem>
          <MenuItem><Link to="/erro-menu">Meu carrinho</Link></MenuItem>
          <MenuItem>Sair</MenuItem>
        </MenuList>
      </MenuContainer>
    </>
  );
};

export default Header;
