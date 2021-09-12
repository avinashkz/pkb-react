import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
	// position: fixed;
	display: grid;
	padding: 15px 0 15px 5%;
	// padding-bottom: 15px;
	// padding-left: 5%;
	align-items: center;
	// z-index: 1;
	// bottom: 0;
    // right: 0;
`;

const Text = styled.span`
	// color: white;
`;

function Footer () {
	return (
		<Container>
			<Text>Copyright &copy; Avinash Prabhakaran 2020</Text>
		</Container>
	);
}

export default Footer;