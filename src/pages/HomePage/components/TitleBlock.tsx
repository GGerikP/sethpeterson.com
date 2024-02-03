import React from 'react';
import styled from 'styled-components';
import PageResizer from '../../../components/PageResizer';
import SethPetersonProfileImage from '../../../images/SethPetersonProfile.jpg';
import BirdStringsCover from '../../../images/BirdStrings.jpeg';

const Container = styled.div`
    height: 100%;
    width: 100%;
    position relative;
`

const MediaContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    object-fit: cover;
    &:before {
        content: ' ';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        opacity: 0.25;
        background-image: url(${BirdStringsCover});
        background-position: 0 0;
        background-size: 200%;
    }

`

const MediaIFrameContainer = styled.div`
    width: 100%;
    height: 100%; /* should be bigger than the MediaContainer */
    position: absolute;
    left: 0;
    top: 25px;
`

const TitleContainer = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    left: 0;
`

const Title = styled.h1`
    font-size: 15vw;
    text-align: right;
    color: white;
    margin-right: 20px;
    margin-bottom: 200px;
    filter: drop-shadow(30px 10px 4px black);
    @media (orientation: landscape) {
        margin-bottom: 100px;
    }
`

const TitleImage = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${SethPetersonProfileImage});
    background-size: cover;
    background-position: center top;
`

interface TitleBlockProps { };

function TitleBlock(props: TitleBlockProps) {
    return (
        <Container>
            <PageResizer heightscalefactor={.45}>
                <MediaContainer>
                    <MediaIFrameContainer>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/GJArTr-PFMI?si=OvjFMOM7SvfjpKqS&showinfo=0&autoplay=1&mute=1&loop=1&playlist=GJArTr-PFMI&controls=0"
                            title="YouTube video player"
                            border-width="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            scrolling="no"
                        >
                        </iframe>
                    </MediaIFrameContainer>
                </MediaContainer>
            </PageResizer>
            <PageResizer heightscalefactor={.55}>
                <TitleImage />
            </PageResizer>
            <TitleContainer>
                    <Title>SETH LAEL</Title>
                </TitleContainer>
        </Container>
    )
}

export default TitleBlock;