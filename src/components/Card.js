import React from "react";
import { Link as UnstyledLink } from "react-router-dom";
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { TiShoppingCart } from 'react-icons/ti';
import PropTypes from "prop-types";
import styled, { css } from "styled-components/macro";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const WIDTH = 300;
const HEIGHT = 1.3 * WIDTH;

const CardImage = styled(Card.Img)`
	height: ${`${HEIGHT}px`};
	margin: 0;
	padding: 0;
`;

const CardContainer = styled(Card)`
	width: ${`${WIDTH}px`};
	border: none;
	border-right: 5px double #D3D3D3;
	border-bottom: 5px double #D3D3D3;
`;

const linkCSS = css`
	grid-area: ${({ area }) => area};
	border-radius: 8px;
	padding: 5px 8px;
	font-size: 18px;
	display: inline-block;
	color: black;
	background-color: white;
	z-index: 1;
	text-decoration: none;
	&:hover {
		text-decoration: none;
	}
	margin: auto;
`;

const Link = styled(UnstyledLink)`
	${linkCSS}
`;

const iconCSS = css`
	margin-top: -4px;
	margin-left: 1px;
	vertical-align: middle;
`;

const Cart = styled(TiShoppingCart)`
	${iconCSS}
`;

const DetailsLink = styled(Link)`
	margin: 0;
`;

const CardBody = styled(Card.Body)`
	padding: 10px 0 10px 0;
	padding-left: 0;
	padding-right: 0;
`;

const CardButton = styled(Button)`
	width: 150px;
	align-self: center;
`;


function BookCard({ book }) {
	return (
		<CardContainer className="text-center">
			<Link to={`books/${book.id}/`}>
				<CardImage src={book?.cover} className="shadow"/>
			</Link>
			<CardBody className="d-flex flex-column">
				<DetailsLink to={`books/${book.id}/`}>
					<Card.Title>
						{book?.shortTitle || book.title}
					</Card.Title>
				</DetailsLink>
				<CardButton
					className="mt-auto"
					variant="dark"
					target={book?.link && '_blank'}
					href={book.link}
					disabled={!book?.link}
				>
					Buy <Cart size={20} />
				</CardButton>

			</CardBody>
		</CardContainer>
	)
}

BookCard.propTypes = {
	book: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		shortTitle: PropTypes.string,
		overview: PropTypes.string,
		cover: PropTypes.string
	}).isRequired
};
export default BookCard;