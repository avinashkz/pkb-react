import React from "react";
import About from "views/About/Main";
import Cover from "components/Cover";
import Books from "components/Books";
import Footer from "components/Footer";

function Home() {
	return (
		<div className="App">
			<Cover/>
			<About />
			<Books />
			<Footer />
		</div>		
	);
}

export default Home;
