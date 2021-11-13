import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components/macro";
import { books } from "data/books/books";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import UnStyledContainer from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import background from "assets/bg-alpha2.png";


function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height
	};
}

function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}

const Container = styled.div`
	background-image: url(${background});
	min-height: auto;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	margin: 0;
	padding: 0;
	min-height: calc(100vh - 58px);
`;


// const Container = styled.div`
// 	background-image: url(${background});
// 	min-height: auto;
// 	background-size: cover;
// 	background-position: center;
// 	background-repeat: no-repeat;
// 	background-attachment: fixed;
// 	display: grid;
// 	min-height: 100vh;
// 	grid-template-areas:
// 		'nav    nav'
// 		'.      contents'
// 		'footer footer';
// 	grid-column-gap: 25px;
// 	grid-template-rows: min-content auto min-content;
// 	grid-template-columns: 2fr 3fr;
// `;

// const Contents = styled.div`
// 	grid-area: contents;
// 	display: flex;
// 	justify-content: center;
// 	align-content: center;
// 	flex-direction: column;
// 	margin: 50px 10% 0 0;
// 	text-align: justify;
// 	text-justify: inter-word;
// `;

const Image = styled.img`
	@media (max-width: 768px) {
		display: block;
		margin: 5% auto 0 auto;
		height: 51vw;
		width: 34vw;
		min-height: 270px;
		min-width: 180px;
	}
	@media (min-width: 768px) {
		position: fixed;
		top: 25%;
		left: 4%;
		height: 42vw;
		width: 28vw;
		min-height: 300px;
		min-width: 200px;
		max-height: 600px;
		max-width: 400px;
	}
	@media (min-width: 1600px) {
		top: 20%;
		left: 7%;
	}
`;

const Contents = styled.div`
	padding: 5%;
	text-align: justify;
	text-justify: inter-word;
`;

const Book = () => {
	const { params: { book } } = useRouteMatch();
	const { height, width } = useWindowDimensions();
	console.log(height, width)
	return (
		<>
			<NavBar />
			<Container>
				<Row>
					<Col className="align-self-center">
						<Image alt="" src={books[book].cover} />
					</Col>

					<Col md={8}><Contents>{books[book].contents()}</Contents></Col>
					<Footer layout="grid" />
				</Row>
			</Container>
		</>
	);
};

export default Book;
