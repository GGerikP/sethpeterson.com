import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import YouTubeIcon from '../../../images/icon-youtube.webp';
import SpotifyIcon from '../../../images/icon-spotify-circle.png';
import ShareIcon from '../../../images/icon-share-small.png';
import CollapsibleTrackList from './CollapsibleTrackList';

const AlbumContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-width: ${theme.breakpoints.min};
`

const TopSpacer = styled.div`
    height: 10px;
    width: 100%;
    text-align: center;
    padding-top: 25px;
`

const AlbumInfoContainer = styled.div`
    width: 100%;
    min-width: ${theme.breakpoints.min};
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    @media (orientation: landscape) {
        text-align: left;
    }
`

const AlbumTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    text-align: left;
    align-items: center;
    @media (orientation: landscape) {
        justify-content: space-around;
    }
`

const AlbumTitle = styled.h1`
    font-size: 25px;
`

const BuyAlbumButton = styled.a`
    margin-left: 20px;
    max-width: 350px;
    min-width: 300px;
    font-size: 17px;
    text-decoration: none;
    line-height: 250%;
    font-weight: bolder;
    width: 200px;
    text-align: center;
    padding: 5px;
    margin-bottom: 10px;
    color: white;
    background-color: #4A8512;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: #4E9A06;
    }
    filter: drop-shadow(3px 3px 2px black);
    &:active {
        filter: none;
    }
`

const AlbumCoverWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 15px;
    @media (orientation: landscape) {
        justify-content: flex-start;
    }
`
const AlbumLinksBlock = styled.div`
    padding-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    flex-grow: 1;
    @media (orientation: landscape) {
        padding-top: 35px;
        flex-direction: column;
        width: 100px;
        margin-top: 0px;
    }
`

const InfoLinkWrapper = styled.div`
    height: 50px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: flex-start;
    flex-grow: 1;
    position: relative;
    background-color: white;
    @media (orientation: landscape) {
        flex-direction: column;
        width: 100%;
        align-items: center;
        border-top: 1px solid black;
    };
    `

const AlbumInfoLink = styled.a`
    flex-wrap; wrap;
    font-size: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-grow: 1;
    @media (orientation: landscape) {
        width: 100%;
        justify-content: center;
    }
`

const IconAsCharacter = styled.img`
    height: 35px;
    width: 35px;
    padding: 0px;
    margin: 0px;
`

interface AlbumCoverProps {
    backgroundimageurl?: string
}
const AlbumCover = styled.div<AlbumCoverProps>`
    position: relative;
    height: 65vw;
    width: 65vw;
    min-width: 350px;
    min-height: 350px;
    margin-top: 35px;
    display: block;
    background-image: url(${props => props.backgroundimageurl});
    background-size: contain;
    background-repeat: no-repeat;
    @media (orientation: landscape) {
        height: 32vw;
        width: 32vw;
        min-width: 250px;
        min-height: 250px;
    }
`

const AlbumTrackList = styled.div`
    position: absolute;
    background-color: rgb(255,255,255,.25);
    top: -35px;
    left: 0;
    width: 85%;
    z-index: 10;
`

const BandCampIFrameStyle = {
    border: 0,
    height: "472px",
    margin: "auto",
    width: "100%"
}

interface AlbumBlockProps {
    id: string;
    title: string;
    albumcoverbackgroundimageurl: string;
    iframesrc: string;
    linkref: string;
    linktext: string;
    bandcamppurchaseurl: string;
    youtubeurl?: string;
    sharealbumurl?: string;
    spotifyurl?: string;
    sharableurl: string;
}

function AlbumBlock(props: AlbumBlockProps) {

    return (
        <AlbumContainer id={props.id}>
            <TopSpacer><hr /></TopSpacer>
            <AlbumInfoContainer>
                <AlbumTitleWrapper>
                    <AlbumTitle>
                        <a 
                            href={props.bandcamppurchaseurl}
                            target="_blank"
                            rel="noopener noreferrer">{props.title}</a>
                    </AlbumTitle>
                    <BuyAlbumButton
                        href={props.bandcamppurchaseurl}
                        target="_blank" 
                        rel="noopener noreferrer">BUY ALBUM
                    </BuyAlbumButton>
                </AlbumTitleWrapper>
                <AlbumCoverWrapper>
                    <AlbumCover backgroundimageurl={props.albumcoverbackgroundimageurl}>
                        <AlbumTrackList>
                            <CollapsibleTrackList>
                                <iframe
                                    title={props.title}
                                    style={BandCampIFrameStyle}
                                    src={props.iframesrc}
                                    seamless
                                >
                                    <a href={props.linkref}>{props.linktext}</a>
                                </iframe>
                            </CollapsibleTrackList>
                        </AlbumTrackList>
                    </AlbumCover>
                    <AlbumLinksBlock>
                        <InfoLinkWrapper>
                            <AlbumInfoLink 
                                href={props.youtubeurl}
                                target="_blank"
                                rel="noopener noreferrer">
                                    <IconAsCharacter src={YouTubeIcon} />&nbsp;Watch
                            </AlbumInfoLink>
                        </InfoLinkWrapper>
                        <InfoLinkWrapper>
                            <AlbumInfoLink 
                                href={props.spotifyurl}
                                target="_blank"
                                rel="noopener noreferrer">
                                    <IconAsCharacter src={SpotifyIcon} />&nbsp;Listen
                            </AlbumInfoLink>
                        </InfoLinkWrapper>
                        <InfoLinkWrapper>
                            <AlbumInfoLink
                                href={props.sharableurl}
                                target="_blank"
                                rel="noopener noreferrer">
                                    <IconAsCharacter src={ShareIcon} />&nbsp;Share
                            </AlbumInfoLink>
                        </InfoLinkWrapper>
                    </AlbumLinksBlock>
                </AlbumCoverWrapper>
            </AlbumInfoContainer>
        </AlbumContainer>
    )
}

export default AlbumBlock;