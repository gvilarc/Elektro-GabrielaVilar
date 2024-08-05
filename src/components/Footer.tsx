import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: #333;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const IconContainer = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <IconContainer>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 21.5V9.5L2 11.5L12 3.5L22 11.5L19.5 9.5V21.5H4.5Z" stroke="#DEDEDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.5 15V21.5H14.5V15H9.5Z" stroke="#DEDEDE" stroke-width="2" stroke-linejoin="round" />
                    <path d="M4.5 21.5H19.5" stroke="#DEDEDE" stroke-width="2" stroke-linecap="round" />
                </svg>
                <IconLink to="/">Home</IconLink>
            </IconContainer>
            <IconContainer>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.92545 17.0939C3.80726 15.2089 3.41566 12.9805 3.82419 10.8272C4.23271 8.6739 5.41326 6.7438 7.14414 5.39933C8.87503 4.05486 11.0372 3.3885 13.2246 3.52539C15.412 3.66227 17.4743 4.59298 19.024 6.14274C20.5738 7.69251 21.5045 9.75472 21.6414 11.9421C21.7783 14.1296 21.112 16.2917 19.7675 18.0226C18.423 19.7535 16.4929 20.9341 14.3397 21.3426C12.1864 21.7511 9.95799 21.3596 8.07299 20.2414L8.07301 20.2413L4.96458 21.1294C4.83598 21.1662 4.69989 21.1678 4.57041 21.1343C4.44093 21.1007 4.32278 21.0332 4.22821 20.9386C4.13363 20.844 4.06607 20.7259 4.03252 20.5964C3.99897 20.4669 4.00065 20.3308 4.0374 20.2022L4.92552 17.0938L4.92545 17.0939Z" stroke="#DEDEDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.1665 13.6289C8.78782 13.6289 9.2915 13.1252 9.2915 12.5039C9.2915 11.8826 8.78782 11.3789 8.1665 11.3789C7.54518 11.3789 7.0415 11.8826 7.0415 12.5039C7.0415 13.1252 7.54518 13.6289 8.1665 13.6289Z" fill="#DEDEDE" />
                    <path d="M12.6665 13.6289C13.2878 13.6289 13.7915 13.1252 13.7915 12.5039C13.7915 11.8826 13.2878 11.3789 12.6665 11.3789C12.0452 11.3789 11.5415 11.8826 11.5415 12.5039C11.5415 13.1252 12.0452 13.6289 12.6665 13.6289Z" fill="#DEDEDE" />
                    <path d="M17.1665 13.6289C17.7878 13.6289 18.2915 13.1252 18.2915 12.5039C18.2915 11.8826 17.7878 11.3789 17.1665 11.3789C16.5452 11.3789 16.0415 11.8826 16.0415 12.5039C16.0415 13.1252 16.5452 13.6289 17.1665 13.6289Z" fill="#DEDEDE" />
                </svg>
                <IconLink to="/chat">Chat</IconLink>
            </IconContainer>
            <IconContainer>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.60254 10.2499C5.6013 9.36045 5.77612 8.47951 6.11693 7.6579C6.45774 6.83628 6.95779 6.09025 7.58827 5.4628C8.21875 4.83535 8.96718 4.33889 9.79042 4.00204C10.6137 3.66519 11.4954 3.49461 12.3849 3.50013C16.0964 3.52772 19.0652 6.61275 19.0652 10.3347V10.9999C19.0652 14.3577 19.7677 16.3061 20.3864 17.371C20.4531 17.4848 20.4885 17.6142 20.4893 17.746C20.49 17.8779 20.4559 18.0076 20.3904 18.1221C20.325 18.2366 20.2305 18.3318 20.1166 18.3982C20.0026 18.4645 19.8732 18.4996 19.7413 18.4999H4.92572C4.79383 18.4996 4.66437 18.4645 4.55038 18.3981C4.4364 18.3318 4.34193 18.2366 4.27651 18.122C4.21108 18.0075 4.17702 17.8778 4.17775 17.7459C4.17847 17.614 4.21397 17.4846 4.28066 17.3709C4.89972 16.3059 5.60253 14.3575 5.60253 10.9999L5.60254 10.2499Z" stroke="#DEDEDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.3335 18.5V19.25C9.3335 20.0456 9.64957 20.8087 10.2122 21.3713C10.7748 21.9339 11.5378 22.25 12.3335 22.25C13.1291 22.25 13.8922 21.9339 14.4548 21.3713C15.0174 20.8087 15.3335 20.0456 15.3335 19.25V18.5" stroke="#DEDEDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <IconLink to="/avisos">Avisos</IconLink>
            </IconContainer>
            <IconContainer>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.5 21.5V19.5C20.5 18.4391 20.0786 17.4217 19.3284 16.6716C18.5783 15.9214 17.5609 15.5 16.5 15.5H8.5C7.43913 15.5 6.42172 15.9214 5.67157 16.6716C4.92143 17.4217 4.5 18.4391 4.5 19.5V21.5" stroke="#DEDEDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.5 11.5C14.7091 11.5 16.5 9.70914 16.5 7.5C16.5 5.29086 14.7091 3.5 12.5 3.5C10.2909 3.5 8.5 5.29086 8.5 7.5C8.5 9.70914 10.2909 11.5 12.5 11.5Z" stroke="#DEDEDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <IconLink to="/perfil">Perfil</IconLink>
            </IconContainer>
        </FooterContainer>
    );
};

export default Footer;