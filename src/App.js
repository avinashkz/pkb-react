import React from "react";
// import "styles/App.css";
import About from "views/About";
import Cover from "components/Cover";
import Books from "components/Books";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Cover>
			</Cover>
			<About />
			<Books />
			<Footer />
		</div>
	);
}

export default App;
