import React, { useState } from "react";
import "./Carousel.css";
import books from "data/books/books";


const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + books.length) % books.length);
    };

    console.log("Current Index:", currentIndex);

    return (
        <div className="book-carousel">
        <div className="book-carousel-container" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
          {books.map((book) => (
            <div className="book-item">
              <img src={book.thumbnail} alt={book.title} />
              <h5>{book.title}</h5>
            </div>
          ))}
        </div>
        <button className="carousel-control prev" onClick={handlePrev}>&larr;</button>
        <button className="carousel-control next" onClick={handleNext}>&rarr;</button>
      </div>
      
    );
};

console.log (books);


export default Carousel;
