import React from "react";
import About from "views/About/Main";
import Cover from "components/Cover";
import Books from "components/Books";

function Home() {
	return (
		<div className="App">
			<Cover/>
			<About />
			<Books />
		</div>		
	);
}

export default Home;
