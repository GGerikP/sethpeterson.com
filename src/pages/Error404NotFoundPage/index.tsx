import React from 'react';
import styled from 'styled-components';

const NotFoundPageWrapperDiv = styled.div`
    width: 100%;
    height: 100%;
`

const Error404NotFoundPage: React.FC = () => {
    return (
            <NotFoundPageWrapperDiv>
                <h1>Error: 404</h1>
                <h1>We're sorry but the page you've navigated to could not be found!</h1>
            </NotFoundPageWrapperDiv>
    )
}

export default Error404NotFoundPage;