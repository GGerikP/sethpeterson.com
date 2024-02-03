import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import theme from '../theme';
import AlbumCoverCheapBoyfriend from '../images/CheapBoyfriend.jpg';

const NavigationBarContainer = styled.div`
    width: 100%;
    min-height: 55px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: #230402;
    padding: 5px;
    background-image: url(${AlbumCoverCheapBoyfriend});
    background-size: 1200px 1200px;
    background-position-y: -410px;
    border-bottom: solid black 2px;
    background-position-x: calc(50% - 100px);
    background-repeat: no-repeat;
    color: white;
`

const NavBar = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
`;

const StyledLink = styled(Link)`
    &&& {
        text-decoration: none;
        padding: 0 1rem;
        cursor: pointer;
        transition: color 0.3s ease-in-out;
        color: white;

        &:hover {
        color: #ddd;
        }
    }
`;

const StyledHashLink = styled(HashLink)`
    &&& {
        text-decoration: none;
        padding: 0 1rem;
        cursor: pointer;
        transition: color 0.3s ease-in-out;
        color: white;

        &:hover {
        color: #ddd;
        }
    }

`

const Logo = styled.h1`
  cursor: pointer;
  height: 100%;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Title = styled.div`
    color: white;
    font-size: ${theme.fontSizes.large};
`


const HamburgerIcon = styled.i`
    display: none;
    color: white;
    width: 25px;

    @media (max-width: ${theme.breakpoints.tablet}) {
      display: block;
      cursor: pointer;
    }
`;

const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  padding-top: 1rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #333;
    display: none;

    &.active {
      display: flex;
    }
  }
`;

type NavigationBarProps = {};

function NavigationBar(props: NavigationBarProps) {

    const [mobileMenuActive, setMobileMenuActive] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuActive(!mobileMenuActive);
    };

    return (
        <NavigationBarContainer>
            <NavBar>
                <Logo as={Link} to="/"><Title>SETH LAEL</Title></Logo>
                <NavItems className={mobileMenuActive ? 'active' : ''}>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledHashLink to="#discography">Discography</StyledHashLink>
                    <StyledHashLink to="#socialmedia">Social Media</StyledHashLink>
                    <StyledHashLink to="#contact">Contact</StyledHashLink>
                </NavItems>
                <HamburgerIcon className="fas fa-bars" onClick={toggleMobileMenu} ></HamburgerIcon>
            </NavBar>
            <MobileMenu className={mobileMenuActive ? 'active' : ''}>
                <StyledLink to="/" onClick={() => setMobileMenuActive(false)}>Home</StyledLink>
                <StyledHashLink to="#discography" onClick={() => setMobileMenuActive(false)}>Discography</StyledHashLink>
                <StyledHashLink to="#socialmedia" onClick={() => setMobileMenuActive(false)}>Social Media</StyledHashLink>
                <StyledHashLink to="#contact" onClick={() => setMobileMenuActive(false)}>Contact</StyledHashLink>
            </MobileMenu>
        </NavigationBarContainer>
    );
}

export default NavigationBar;