import React from "react";
// import "styles/App.css";
import books from "data/books/books";

function App() {
	return (
		<div className="App">
			<div gutter={16}>
				{books.map(book => (
					<div key={book.title} span={8}>
						<img alt="" src={require("" + book.thumbnail)}/>
						<span>{book.title}</span>
						<span>{book.overview.slice(0,200)}</span>
						<button type="primary">Buy</button>
						<button>Goodreads</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
