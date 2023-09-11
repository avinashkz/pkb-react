import React from "react";
import styled from "styled-components/macro";
import header from "assets/header.jpg";
import Carousel from "react-bootstrap/Carousel";

const CarouselImage = styled.img`
  object-fit: cover;
  height: calc(100vh - 58px);
  width: 100%;
`;

const Title = styled.span`
  font-size: 60px;
  font-weight: 600;
`;

function Cover() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <CarouselImage className="d-block" src={header} alt="First slide" />
        <Carousel.Caption>
          <Title>Critic. Historian. Novelist. Journalist</Title>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
                <CarouselImage
                    className="d-block"
                    src={header}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage
                    className="d-block"
                    src={header}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
    </Carousel>
  );
}

export default Cover;
