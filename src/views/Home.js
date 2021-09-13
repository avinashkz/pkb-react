import React from "react";
import Cover from "components/Cover";
import NavBar from "components/NavBar";

function Home() {
	return (
		<>
			<NavBar page={"home"} />
			<Cover/>
		</>		
	);
}

export default Home;
