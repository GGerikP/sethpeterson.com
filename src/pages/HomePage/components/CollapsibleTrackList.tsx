import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%
`

const ToggleBar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

interface ArrowIconProps {isopen: number}
const ArrowIcon = styled.i<ArrowIconProps>`
  transition: transform 1s ease; /* Smooth rotation transition */
  transform: ${props => (props.isopen ? 'rotate(90deg)' : 'rotate(0deg)')};
`;

interface TrackListProps {
    isopen: number
}
const TrackList = styled.div<TrackListProps>`
    height: ${props => (props.isopen ? "500px" : "0px")};
    overflow: hidden;
    transition: height 1s ease;
    width: 100%;
    margin-left: 25px;
`

const OpenTracksLabel = styled.p`
    text-decoration: underline;
    padding: 0px;
    margin: 0px 10px;
    font-size: 25px;
`

interface CollapsibleTrackListProps {
    children: ReactNode;
};

function CollapsibleTrackList(props: CollapsibleTrackListProps) {

    const [isOpen, setIsOpen] = useState<number>(0);
    const handleToggleOpen = () => {
        setIsOpen(isOpen ? 0 : 1);
    }
    return (
        <Container>
            <ToggleBar 
                onClick={handleToggleOpen}
                onMouseOver={handleToggleOpen}><ArrowIcon 
                className="fas fa-angle-right"
                isopen={isOpen}/><OpenTracksLabel>&nbsp;&nbsp;&nbsp;Track List</OpenTracksLabel></ToggleBar>
            <TrackList isopen={isOpen}>{props.children}</TrackList>
        </Container>
    )
}

export default CollapsibleTrackList;