import React from 'react';
import styled from 'styled-components';
import PatreonIcon from '../../../images/patreon-button.webp';
import YouTubeButton from '../../../images/YouTubeButton.png';
import SpotifyIconRectangle from '../../../images/icon-spotify-rectangle.png';
import FacebookIconRectangle from '../../../images/icon-facebook-rectangle.png';
import InstagramIconRectange from '../../../images/icon-instagram-rectangle.png';
import BirdStringsCover from '../../../images/BirdStrings.jpeg';

const Container = styled.div`
    width: 100%;
    min-height: 75px;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-contents: center;
    position: relative;
    &:before {
        content: ' ';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        opacity: 0.6;
        background-image: url(${BirdStringsCover});
        background-position: 25% 0;
        background-size: cover;        
    }
`

const PromotionBlock = styled.div`
    width: 19%;
    height: 75px;
    min-width: 150px;
    min-height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    text-align: center;
    margin: 5px;
    /*background-image: radial-gradient(circle, rgb(255,255,255,1), rgb(202,34,23,.5));*/ /* CA2217 */
    background-image: rgb(0,0,0,0);
    color: black;
    flex-basis: auto;
    flex-grow: 1;
`

const PromotionButton = styled.a`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const PromotionIcon = styled.img`
    min-height: 50px;
    min-width: 125px;
    max-height: 150px;
    height: 50%;
    padding: 3px;
    background-color: white;
    border-radius: 10px;
    filter: drop-shadow(3px 3px 2px black);
    &:hover {
        background-color: #D8D8D8;
    };
    &:active {
        filter: drop-shadow(-3px -3px 2px black);
    }
`

/*const PromotionDescription = styled.p`
    display: inline-block;
    width: 100%;
    @media (width < ${theme.breakpoints.tablet}) {
        display: none;
    }
`*/

interface PromotionsBlockProps { }

function PromotionsBlock(props: PromotionsBlockProps) {
    return (
        <Container id="socialmedia">
            <PromotionBlock>
                <PromotionButton
                    href="https://www.patreon.com/sethlael/membership"
                    target="_blank"
                    rel="noopener noreferrer">
                    <PromotionIcon src={PatreonIcon} />
                </PromotionButton>
            </PromotionBlock>
            <PromotionBlock>
                <PromotionButton
                    href="https://www.youtube.com/@sethlael"
                    target="_blank"
                    rel="noopener noreferrer">
                    <PromotionIcon src={YouTubeButton} />
                </PromotionButton>
            </PromotionBlock>
            <PromotionBlock>
                <PromotionButton
                    href="https://open.spotify.com/playlist/37i9dQZF1E4oGKVT9kldQi?si=f3e0417965224ffd"
                    target="_blank"
                    rel="noopener noreferrer">
                    <PromotionIcon src={SpotifyIconRectangle} />
                </PromotionButton>
            </PromotionBlock>
            <PromotionBlock>
                <PromotionButton
                    href="https://www.facebook.com/sethlaelmusic"
                    target="_blank"
                    rel="noopener noreferrer">
                    <PromotionIcon src={FacebookIconRectangle} />
                </PromotionButton>
            </PromotionBlock>
            <PromotionBlock>
                <PromotionButton
                    href="https://www.instagram.com/sethlael/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <PromotionIcon src={InstagramIconRectange} />
                </PromotionButton>
            </PromotionBlock>
        </Container>
    )
}

export default PromotionsBlock;