import React from "react";
import styled from "styled-components/macro";
import Card from "components/Card";
import books from "data/books/books";

const Container = styled.article`
	display: grid;
	grid-template-areas:
		'. title .'
		'left books right';
	grid-template-columns: max-content auto max-content;
	align-items: center;
	justify-items: center;
	padding-bottom: 75px;
`;

const Title = styled.h1`
	grid-area: title;
`;

const Button = styled.button`
	grid-area: ${({area}) => area};
`;

const Shelf = styled.article`
	grid-area: books;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	justify-self: stretch;
	justify-items: center;
`;

// function calculateIndexes (start, total) {
// 	return new Set(Array(8).fill().map((element, index) => {start + index)});
// }

function Books() {
	// const [startIndex, setStartIndex] = useState(0);
	const indexes = new Set([0, 1, 2, 3]);
	const filteredBooks = books.reduce((acc, book, index) => {
		if (indexes.has(index))
			acc.push(book);
		return acc;
	}, []);

	return (
		<Container>
			<Title>Books</Title>
			<Button area="left">Previous</Button>
			<Button area="right">Next</Button>
			<Shelf>
				{filteredBooks.map(book => (
					<Card key={book.title} book={book}/>
				))}
			</Shelf>
		</Container>
		
	);
}

export default Books;
