import React from "react";
import Book from "views_bootstrap/Book";
import books from "data/books/books";

function Portfolio () {
	return (
		<section id="portfolio" className="portfolio">
			<div className="container">

				<div className="section-title">
					<h2>Books</h2>
					<p>Books</p>
				</div>

				<div className="row">
					<div className="col-lg-12 d-flex justify-content-center">
						<ul id="portfolio-flters">
							<li data-filter="*" className="filter-active">All</li>
							<li data-filter=".filter-app">App</li>
							<li data-filter=".filter-card">Card</li>
							<li data-filter=".filter-web">Web</li>
						</ul>
					</div>
				</div>

				<div className="row portfolio-container">
					{books.map(book => (
						<Book key={book.title} book={book}/>
					))}

				</div>

			</div>
		</section>

	);
}

export default Portfolio;