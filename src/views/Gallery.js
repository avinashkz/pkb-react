import React from "react";
import styled from "styled-components/macro";
import Card from "react-bootstrap/Card";

const Container = styled.div`
  margin: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  justify-self: stretch;
  justify-items: center;
  grid-row-gap: 40px;
  grid-column-gap: min(5%, 40px);
`;

const Image = styled(Card.Img)`
  padding: 3px;
`;

function importAll(r) {
  return r.keys().map(r);
}

function Gallery() {
  const thumbnails = importAll(
    require.context("assets/gallery/3x4", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <Container>
      {thumbnails.map((image, index) => (
        <Card key={index}>
          <Image key={index} src={image} />
        </Card>
      ))}
    </Container>
  );
}

export default Gallery;
