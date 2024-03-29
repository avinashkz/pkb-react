import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components/macro";
import { books } from "data/books/books";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Image = styled.img`
  @media (max-width: 768px) {
    display: block;
    margin: 5% auto 0 auto;
    height: 51vw;
    width: 34vw;
    min-height: 270px;
    min-width: 180px;
  }
  @media (min-width: 768px) {
    position: fixed;
    top: 23%;
    left: 4%;
    height: 42vw;
    width: 28vw;
    min-height: 300px;
    min-width: 200px;
    max-height: 600px;
    max-width: 400px;
  }
  @media (min-width: 1600px) {
    top: 18%;
    left: 7%;
  }
`;

const Contents = styled.div`
  padding: 5%;
  text-align: justify;
  text-justify: inter-word;
`;

const Book = () => {
  const { book } = useParams();

  return (
    <>
      <Container>
        <Row>
          <Col className="align-self-center">
            <Image alt="" src={books[book].cover} />
          </Col>

          <Col md={8}>
            <Contents>{books[book].contents()}</Contents>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Book;
