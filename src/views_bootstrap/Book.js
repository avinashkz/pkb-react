import React from "react";
// import { Link as UnstyledLink } from "react-router-dom";
import PropTypes from "prop-types";
// import styled from "styled-components/macro";
// import Image from "assets/img/portfolio/portfolio-1.jpg";

// const WIDTH = 200;
// const HEIGHT = 1.55 * WIDTH;

// const Container = styled.div`
// 	background-image: ${({ cover }) => `url(${cover})`};
// 	background-size: cover;
// 	justify-items: center;
// 	height: ${`${HEIGHT}px`};
// 	width: ${`${WIDTH}px`};
// 	border-radius: 15px;
// 	box-shadow: 0 1px 0 rgba(8, 11, 14, 0.06), 
// 		0 16px 16px -1px rgba(8, 11, 14, 0.1);
// `;

// const Button = styled.button`
// 	grid-area: ${({ area }) => area};
// 	border-radius: 10px;
// 	width: 120px;
// 	height: 45px;
// 	font-size: 18px;
// 	display: inline-block;
// 	background-color: white;
// 	margin-bottom: 50px;
// 	z-index: 1;
// `;

// const Link = styled(UnstyledLink)`
// 	grid-area: ${({ area }) => area};
//   // text-decoration: none;
//   // &:hover {
//   //   text-decoration: none;
//   // }
// `;

function Card({ book }) {
	return (
		<div className="col-lg-4 col-md-6 portfolio-item" style={{width: "200px"}}>
			<div className="portfolio-wrap">
				<img src={book.cover} className="img-fluid" height="310px" width="200px" alt=""/>
				<div className="portfolio-info">
					<h4>{book.title}</h4>
					{/* <p>{book.overview}</p> */}
					<div className="portfolio-links">
						<a href={book.cover} data-gall="portfolioGallery" className="venobox" title={book.title}><i className="bx bx-plus"></i></a>
						<a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
					</div>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	book: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		overview: PropTypes.string,
		cover: PropTypes.string
	}).isRequired
};
export default Card;