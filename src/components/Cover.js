import React from "react";
import styled from "styled-components/macro";
import header from "assets/header.jpg";

const Container = styled.div`
    background-image: url(${header});
    min-height: auto;
    background-size: cover;
    background-position: center;
    height: 100vh;
    background-repeat: no-repeat;
    display: grid;
    grid-template-areas:
        '.'
        '.'
        'subtitle'
        '.';
    grid-template-rows: auto auto min-content 100px;
`;

const SubTitle = styled.h1`
    grid-area: subtitle;
    color: white;
    justify-self: center;
    font-size: 48px;
`;

function Cover() {
    return (
		<>
            <Container>
                <SubTitle>Critic. Historian. Novalist. Journalist</SubTitle>
            </Container>
        </>
    );
}

export default Cover;