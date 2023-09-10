import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import history from "app/history";
import Home from "views/Home";
import About from "views/About";
import Gallery from "views/Gallery";
import PageLayout from "components/PageLayout";
import Book from "views/Book";
import Books from "views/Books";
import "bootstrap/dist/css/bootstrap.min.css";

history.listen(() => {
  window.scrollTo(0, 0);
});

function App() {
  return (
    <Router basename="/" history={history}>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/" element={<PageLayout />}>
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route exact path="books/:book/" element={<Book />} />
            <Route exact path="books" element={<Books />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
