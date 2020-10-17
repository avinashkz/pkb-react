import React from "react";
// import "styles/App.css";
import Card from "components/Card";
import books from "data/books/books";

function App() {
	return (
		<div className="App">
			<div>
				{books.map(book => (
					<Card key={book.title} book={book}/>
				))}
			</div>
		</div>
	);
}

export default App;
