import React from "react";
import styled from "styled-components/macro";
import header from "assets/header.jpg";
import Carousel from "./Carousel.js";
import { FaEnvelope, FaFacebookSquare } from 'react-icons/fa';

const Main = styled.main`
`;
const Background = styled.section`
    background-image: url(${header});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: calc(95vh - 68px);
    overflow: hidden;
    display: flex;
    align-items: flex-end;
`;

const Title = styled.span`
    font-family: 'Playfair Display', serif;
    font-size: 60px;
    font-weight: 600;
    color: white; 
    line-height: 9rem;
    text-shadow: 1px 1px 4px black;

    margin: 0 auto;
`;
const Heading = styled.div`
    text-align: center; 
    width: 100%;
    margin-bottom: 1.5rem;
    ${'' /* margin-left: 5rem; */}
    ${'' /* margin-top: 4rem; */}
`;
const About = styled.section`
    width: 100%;
    background-color: #bda27d;
    font-family: 'Merriweather', serif;
    text-align: center;
    color: white;
    padding-block: 100px;
`;
const Heart = styled.h2`
   font-family: 'Open Sans', sans-serif;  
   font-weight: 700;
   display:inline-block;
   position:relative;
`;
const AfterHeart = styled.div`
  content:'';
  height:3px;
  width:20%;
  background: white;
  position:absolute;
  left:calc(50% - 10%);
  bottom:-20px;
`;
const Detail = styled.p`
   margin-inline: 350px;
   margin-top: 50px;
`;
const Button = styled.button`
   border-radius: 30px;
   padding-block: 14px;
   padding-inline: 18px;
   border-style: none;
   font-family: 'Open Sans', sans-serif; 
   font-weight: 600; 

`;
const BookSection = styled.section`
  text-align: center;
`;
const Books = styled.h2`
   font-family: 'Open Sans', sans-serif;  
   font-weight: 700;
   padding-top: 100px;
   display:inline-block;
   position:relative;
   color: #bda27d;
`;
const AfterBooks = styled.div`
  content:'';
  height:3px;
  width:50%;
  background: #bda27d;
  position:absolute;
  left:calc(50% - 20%);
  bottom:-15px;
`;
const Explore = styled.button`
  background-color: black;
  color: white;
  border-radius: 30px;
  padding-block: 14px;
  padding-inline: 18px;
  border-style: none; 
  height: 50px;
  width: 150px;
  font-family: 'Open Sans', sans-serif;  
  font-weight: 600;
  margin-bottom: 50px;
  position: relative;
  top: -50px;
`;
const Contact = styled.div`
  width: 100%;
  background-color: #bda27d;
  font-family: 'Open Sans', sans-serif;  
  text-align: center;
  color: white;
  padding-block: 100px;
`;
const Text = styled.h2`
  font-weight: 700;
  display:inline-block;
  position:relative;
`;
const AfterText = styled.div`
  content:'';
  height:3px;
  width:30%;
  background: white;
  position:absolute;
  left:calc(50% - 10%);
  bottom:-18px;
`;
const Send = styled.p`
  font-weight: 500; 
  margin-top: 30px;
`;
const Icons = styled.ul`
   display: flex;
   margin-right: 22px;
   align-items: center;
   padding-top: 20px;

   &:hover {
	color: white;
	cursor: pointer;
   }
`; 
const IconItem = styled.li `
   list-style: none;
   margin-right: 200px;
   align-items: center;
   position: relative;
   left: 575px; 
`;

function Cover() {
    return (
        <Main>
            <Background>
                <Heading>
                    <Title>Critic. Historian. Novelist. Journalist.</Title>
                </Heading>
            </Background>
            <About>
                <Heart>
                    Heart Of A Storm
                    <AfterHeart />
                </Heart>
                <Detail>A powerhouse to be reckoned with in the intellectual space of Kerala, Balakrishnan was an author par excellence, a committed and daring journalist, a fiery orator and above all a great human being. He authored one of best and most widely read novels of the language,a controversial and original history of the state ,and a series of studies unparalleled in their depth, understanding and originality of vision. He never took the beaten tracks in whatever he did. His vision and learning took him through unchartered territories which he conquered with his characteristic mastery.</Detail>
                <Button>KNOW MORE</Button>
            </About>
            <BookSection>
                <Books>Books <AfterBooks /></Books>
                <Carousel />
                <Explore> View </Explore>
            </BookSection>
            <Contact>
                <Text>Get In Touch! <AfterText /></Text>
                <Send>Send us an email and we will get back to you as soon as possible!</Send>
                <Icons>
                <IconItem area='mail' target='_blank' href='mailto:pkjaya@hotmail.com'><FaEnvelope size={25} /></IconItem>
				<IconItem area='facebook' target='_blank' href='https://www.facebook.com/pkbauthor'><FaFacebookSquare size={25} /></IconItem>
                </Icons>
            </Contact>
        </Main>
    );
}

export default Cover;


