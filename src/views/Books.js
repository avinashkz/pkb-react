import React from "react";
import styled from "styled-components/macro";
import Card from "components/Card";
import books from "data/books/books";

const Container = styled.article`
	display: grid;
	grid-template-columns: auto;
	align-items: center;
	justify-items: center;
	padding: 50px;
`;

const Shelf = styled.article`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	justify-self: stretch;
	justify-items: center;
	grid-row-gap: 40px;
	grid-column-gap: min(5%, 40px);
`;

function Books() {
	return (
		<Container id="books">
			<Shelf>
				{books.map(book => (
					<Card key={book.title} book={book}/>
				))}
			</Shelf>
		</Container>
		
	);
}

export default Books;
