import React from "react";
import PropTypes from "prop-types";
// import styled from "styled-components/macro";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

function PageLayout ({children}) {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
        

	);
}

PageLayout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	]).isRequired
};

export default PageLayout;
