import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import Albums from './components/Albums';
import TitleBlock from './components/TitleBlock';
import PromotionsBlock from './components/PromotionsBlock';
import PageResizer from '../../components/PageResizer';

const HomePageContainer = styled.div`
    width: 100%;
    min-width: ${theme.breakpoints.min};
    display: flex;
    flex-direction: column;
    position: relative;
`

const TitleRow = styled.div`
    width: 100%;
    height: 100%;
    min-width: ${theme.breakpoints.min};
`

const PromotionsRow = styled.div`
    width: 100%;
    min-width: ${theme.breakpoints.min};
`

const AlbumsRow = styled.div`
    width: 100%;
    min-width: ${theme.breakpoints.min};
    display: flex;
    flex-direction: column;
`

type HomePageProps = {};

function HomePage(props: HomePageProps) {

    return (
        <HomePageContainer>
            <PageResizer heightscalefactor={1}><TitleRow><TitleBlock /></TitleRow></PageResizer>
            <AlbumsRow><Albums /></AlbumsRow>
            <PromotionsRow><PromotionsBlock /></PromotionsRow>
        </HomePageContainer>
    )
}

export default HomePage;