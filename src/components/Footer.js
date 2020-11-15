import React from "react";
import styled from "styled-components/macro";

const Container = styled.article`
	height: 50px;
	display: grid;
	padding-left: 5%;
	align-items: center;
`;

const Text = styled.span``;

function Footer () {
	return (
		<Container>
			<Text>Copyright &copy; Avinash Prabhakaran 2020</Text>
		</Container>
	);
}

export default Footer;