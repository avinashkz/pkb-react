import React from "react";
import styled from "styled-components/macro";
import Card from 'react-bootstrap/Card'

const Container = styled.div`
	margin: 50px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	justify-self: stretch;
	justify-items: center;
	grid-row-gap: 40px;
	grid-column-gap: min(5%, 40px);
`;

// function MyVerticallyCenteredModal(props) {
// 	return (
// 	  <Modal
// 		{...props}
// 		size="lg"
// 		aria-labelledby="contained-modal-title-vcenter"
// 		centered
// 	  >
// 		<Modal.Header closeButton>
// 		  <Modal.Title id="contained-modal-title-vcenter">
// 			Modal heading
// 		  </Modal.Title>
// 		</Modal.Header>
// 		<Modal.Body>
// 		  <h4>Centered Modal</h4>
// 		  <p>
// 			Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
// 			dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
// 			consectetur ac, vestibulum at eros.
// 		  </p>
// 		</Modal.Body>
// 		<Modal.Footer>
// 		  <Button onClick={props.onHide}>Close</Button>
// 		</Modal.Footer>
// 	  </Modal>
// 	);
//   }]


function importAll(r) {
	return r.keys().map(r);
  }

function Gallery() {
	const thumbnails = importAll(require.context('assets/gallery/3x4', false, /\.(png|jpe?g|svg)$/));
	// const fullsize = importAll(require.context('assets/gallery/fullsize', false, /\.(png|jpe?g|svg)$/));
	return (
		<Container>
			{thumbnails.map((image, index) => (
				<>
					{/* <Card> */}
					<Card.Img key={index} src={image.default}/>
						{/* <Card.Img key={index} src={fullsize[index].default} /> */}
					{/* </Card> */}
					</>
			))}
		</Container>);
}

export default Gallery;