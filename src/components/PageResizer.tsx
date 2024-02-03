import React, { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';

interface PageProps {
    children: ReactNode;
    style?: React.CSSProperties;
    heightscalefactor?: number;
}

interface PageContainerProps {
    height: number;
}

const PageContainer = styled.div<PageContainerProps>`
  width: 100%;
  height: ${props => props.height}px; 
  overflow: hidden;
  position: relative;
  `;

const PageResizer: React.FC<PageProps> = ({ children, style, heightscalefactor }) => {

    const getPageHeight = () => {
        const height = heightscalefactor && window.innerHeight > window.innerWidth ? window.innerHeight * heightscalefactor : window.innerHeight;
        console.log('Resizing window to: ', height);
        return height;
    }

    // State to hold the dynamic height
    const [pageHeight, setPageHeight] = useState(getPageHeight());

    // Function to update the height when the window is resized
    const handleResize = () => {
        setPageHeight(getPageHeight());
    };

    // Attach an event listener to the window for the resize event
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, );


    return (
        <PageContainer style={style} height={pageHeight}>
            {children}
        </PageContainer>

    )
}

export default PageResizer;