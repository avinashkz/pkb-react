import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
// import NavBar from "components/NavBar";
// import Footer from "components/Footer";

const Container = styled.div`
	margin: 0;
	padding: 0;
	display: grid;
`;

function PageLayout ({children}) {
	return (
		<Container>
			{/* <NavBar /> */}
			{children}
			{/* <Footer /> */}
		</ Container>
	);
}

PageLayout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	]).isRequired
};

export default PageLayout;
