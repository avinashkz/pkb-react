import React from "react";
import { Link as UnstyledLink } from "react-router-dom";
import styled from "styled-components/macro";

const Container = styled.article`
	display: grid;
	grid-template-areas:
		'title'
		'content'
		'button';
	justify-items: center;
`;

const Title = styled.h1`
	grid-area: title;
`;

const Content = styled.p`
	grid-area: content;
`;

const Button = styled(UnstyledLink)`
  // text-decoration: none;
  // &:hover {
  //   text-decoration: none;
  // }
	border-radius: 10px;
	width: 120px;
	height: 45px;
	font-size: 18px;
	margin: 30px;
	text-align: center;
	justify: center;
`;


function About () {
	return (
		<Container>
			<Title>Heart Of a Storm</Title>
			<Content>A powerhouse to be reckoned with in the intellectual space of Kerala, Balakrishnan was an author par excellence, a committed and daring journalist, a fiery orator and above all a great human being. He authored one of best and most widely read novels of the language,a controversial and original history of the state ,and a series of studies unparalleled in their depth, understanding and originality of vision. He never took the beaten tracks in whatever he did. His vision and learning took him through unchartered territories which he conquered with his characteristic mastery. </Content>
			<Button to="/about/">
                Know More
			</Button>
		</Container>
	);
}

export default About;