import React from "react";
import About from "views/About/Main";
import Cover from "components/Cover";
import Books from "views/Books/Main";

function Home() {
	return (
		<>
			<Cover/>
			<About />
			<Books />
		</>		
	);
}

export default Home;
