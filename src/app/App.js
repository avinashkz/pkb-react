import React from "react";
// import "styles/App.css";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "views/Home";
import About from "views/About/About";
import Gallery from "views/Gallery";
import PageLayout from "components/PageLayout";

function App() {
	return (
		<Router basename='/'>
			<div className="App">
				<PageLayout>
					<Switch>
						<Route path="/about">
							<About/>
						</Route>
						<Route path="/gallery">
							<Gallery />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
					</Switch>
				</PageLayout>
				
			</div>
		</Router>
		
	);
}

export default App;
