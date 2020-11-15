import React from "react";
// import "styles/App.css";
import {Router, Route, Switch} from "react-router-dom";
import history from "app/history";
import Home from "views/Home";
import About from "views/About/About";
import Gallery from "views/Gallery";

function App() {
	return (
		<Router history={history}>
			<div className="App">
				<Switch>
					<Route path="/about">
						<About/>
					</Route>
					<Route path="/gallery">
						<Gallery />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
				
			</div>
		</Router>
		
	);
}

export default App;
