import React from 'react';
import styled from 'styled-components';
import AlbumCoverAfterTheseHardTimes from '../../../images/AfterTheseHardTimes.jpg';
import AlbumCoverBirdStrings from '../../../images/BirdStrings.jpeg';
import AlbumCoverCheapBoyfriend from '../../../images/CheapBoyfriend.jpg';
import AlbumBlock from './AlbumBlock';
import SethPetersonProfile from '../../../images/SethPetersonProfile.jpg';
import theme from '../../../theme';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
`

const AlbumsContainer = styled.div`
    width: 100%;
    @media (orientation: landscape) {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    @media (width > ${theme.breakpoints.mobile}) {
        margin-left: 20px;
    }
`

const ProfilePic = styled.div`
    display: none;
    @media (orientation: landscape) {
        display: block;
        min-height: 1200px;
        width: 50%;
        background-image: url(${SethPetersonProfile});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        content: ' ';
        border: 1px solid black;
    }
`

interface AlbumsProps { };

function Albums(props: AlbumsProps) {

    return (
        <Container id="discography">
            <AlbumsContainer>
                <AlbumBlock
                    id="AFTER_THE_HARD_TIMES"
                    title="AFTER THE HARD TIMES"
                    albumcoverbackgroundimageurl={AlbumCoverAfterTheseHardTimes}
                    iframesrc="https://bandcamp.com/EmbeddedPlayer/album=3707519919/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/"
                    linkref="https://sethlael.bandcamp.com/album/after-the-hard-times"
                    linktext="After The Hard Times by Seth Lael"
                    youtubeurl='https://www.youtube.com/watch?v=-3pmMWfAtrU&list=PLKwVdkW5N-f7uoqvwqodAwAgAwNhlDbTU'
                    bandcamppurchaseurl='https://sethlael.bandcamp.com/album/after-the-hard-times?action=buy&from=embed'
                    spotifyurl='https://open.spotify.com/album/1AElZihGtu331o598JfUsZ?si=BAtYk-2xQpK0B9VcQgvL_A'
                    sharableurl='#AFTER_THE_HARD_TIMES'
                />
                <AlbumBlock
                    id="BIRD_STRINGS"
                    title="BIRD STRINGS"
                    albumcoverbackgroundimageurl={AlbumCoverBirdStrings}
                    iframesrc="https://bandcamp.com/EmbeddedPlayer/album=1883415282/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/"
                    linkref="https://sethlael.bandcamp.com/album/bird-strings"
                    linktext="Bird Strings by Seth Lael"
                    youtubeurl='https://www.youtube.com/watch?v=kPIvPEM0TKI&list=PLKwVdkW5N-f60hkb-QbQwysRQCMT_lwSM&pp=iAQB'
                    bandcamppurchaseurl='https://sethlael.bandcamp.com/album/bird-strings?action=buy&from=embed'
                    spotifyurl='https://open.spotify.com/album/1JCewhSot6jwG9oSKgMtX1?si=iUh0WT2VQu28TRvdONiELg'
                    sharableurl='#BIRD_STRINGS'
                />
                <AlbumBlock
                    id="CHEAP_BOYFRIEND"
                    title="CHEAP BOYFRIEND"
                    albumcoverbackgroundimageurl={AlbumCoverCheapBoyfriend}
                    iframesrc="https://bandcamp.com/EmbeddedPlayer/album=2015456330/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/"
                    linkref="https://sethlael.bandcamp.com/album/cheap-boyfriend-2"
                    linktext="Cheap Boyfriend by Seth Lael"
                    youtubeurl='https://www.youtube.com/watch?v=ZSozQhSag9c&list=PLKwVdkW5N-f5OfiR4fkqdRZsYzfLabpt4&pp=iAQB'
                    bandcamppurchaseurl='https://sethlael.bandcamp.com/album/cheap-boyfriend-2?action=buy&from=embed'
                    spotifyurl=''
                    sharableurl='#CHEAP_BOYFRIEND'
                />
            </AlbumsContainer>
            <ProfilePic />
        </Container>
    )
}

export default Albums;