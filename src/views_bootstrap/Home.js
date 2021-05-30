import React from "react";
import About from "views_bootstrap/About";
import Header from "views_bootstrap/Header";
import Services from "views_bootstrap/Services";
import Portfolio from "views_bootstrap/Portfolio";

function Home() {
	return (
		<>
			<Header />
			<About />
			<Services />
			<Portfolio />
		</>
	);
}

export default Home;
