import React from "react";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components/macro";
import { books } from "data/books/books";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import background from "assets/bg-alpha2.png";


const Container = styled.div`
	background-image: url(${background});
	min-height: auto;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	display: grid;
	min-height: 100vh;
	grid-template-areas:
		'nav    nav'
		'.      contents'
		'footer footer';
	grid-column-gap: 25px;
	grid-template-rows: min-content auto min-content;
	grid-template-columns: 2fr 3fr;
`;

const Contents = styled.div`
	grid-area: contents;
	display: flex;
	justify-content: center;
	align-content: center;
	flex-direction: column;
	margin: 50px 10% 0 0;
	text-align: justify;
	text-justify: inter-word;
`;

const Image = styled.img`
	height: 30vw;
	width: 20vw;
	position: fixed;
	top: 25%;
	left: 10%;
`;
const ImageContainer = styled.div`
	// grid-area: image;
`;

const Book = () => {
	const { params: { book } } = useRouteMatch();
	return (
		<>
			<Container>
				<NavBar />
				<ImageContainer>
					<Image alt="" src={books[book].cover} />
				</ImageContainer>
				<Contents>{books[book].contents()}</Contents>
				<Footer layout="grid"/>
			</Container>
		</>
	);
};

export default Book;
