import React from "react";
// import "styles/App.css";
import { Router, Route, Switch} from "react-router-dom";
import history from "app/history";
import Home from "views_bootstrap/Home";
// import About from "views/About/About";
// import Gallery from "views/Gallery";
// import PageLayout from "components/PageLayout";
// import Book from "views/Book";

history.listen(() => {
	window.scrollTo(0, 0);
});

function App() {
	return (
		<Router basename='/' history={history}>
			<div className="App">
				{/* <PageLayout> */}
				<Switch>
					{/* <Route path="/about">
							<About/>
						</Route>
						<Route path="/gallery">
							<Gallery />
						</Route>
						<Route path="/books/:book/">
							<Book />
						</Route> */}
					<Route path="/">
						<Home />
					</Route>
				</Switch>
				{/* </PageLayout> */}
				
			</div>
		</Router>
		
	);
}

export default App;
