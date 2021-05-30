import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components/macro";
import header from "assets/header.jpg";

const Container = styled.div`
    background-image: url(${header});
    opacity: 0.9;
    min-height: auto;
    background-size: cover;
    background-position: center;
    height: 80vh;
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
    font-size:

`;

function Cover () {
	return (
		<Container>
			<SubTitle>Critic. Historian. Novalist. Journalist</SubTitle>
		</Container>
	);
}

export default Cover;