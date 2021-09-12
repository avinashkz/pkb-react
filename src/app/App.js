import React from "react";
// import "styles/App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import history from "app/history";
import Home from "views/Home";
import About from "views/About";
import Gallery from "views/Gallery";
import PageLayout from "components/PageLayout";
import Book from "views/Book";
import Books from "views/Books";

history.listen(() => {
	window.scrollTo(0, 0);
});

function App() {
	return (
		<Router basename='/' history={history}>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/:page/">
						<PageLayout>
							<Route path="/about">
								<About />
							</Route>
							<Route path="/gallery">
								<Gallery />
							</Route>
							<Route exact path="/books/">
								<Books />
							</Route>
							<Route path="/books/:book/">
								<Book />
							</Route>
						</PageLayout>
					</Route>
					{/* <Route>
						<div>Page not found</div>
					</Route> */}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
