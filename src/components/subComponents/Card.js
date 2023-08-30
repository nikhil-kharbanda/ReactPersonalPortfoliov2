/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import React from 'react'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Github } from './AllSvgs'


const Box = styled(motion.li)`
    width: 40rem;
    height: 40vh;
    background-color: #ffd700;
    color:${props => props.theme.body};
    padding: 0.5rem 3rem;
    margin-right: -25rem;
    border-radius: 50px 0 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid ${props => props.theme.body};
    transition: all 0.3s ease;

    &:hover{
        background-color: #fa0000;
        color:${props => props.theme.text};
        border: 1px solid ${props => props.theme.text};
        
    }
`

const Title = styled.h2`
font-size: calc(1em + 0.5vw);
`

const Description = styled.h3`
font-size: calc(0.8em + 0.3vw);
font-family: 'Karla',sans-serif;
`

const Image = styled.div`
background-image: ${(props) => `url(${props.img})`};
width: 100%;
height: 50%;

background-size: cover;
border: 1px solid transparent;
background-position: center center;

`

const Footer = styled.div`
display: flex;
justify-content: space-between;
`

const Link = styled.div`
background-color: #fa0000;
color: #ffffff;
text-decoration: none;
padding:0.5rem calc(2rem + 2vw);
border-radius: 0 0 0 50px;
font-size:calc(0.5em + 0.5vw);

${Box}:hover &{
    background-color: #ffd700;
    color: #ffffff;
`

const Git = styled.div`
color: inherit;
text-decoration: none;
${Box}:hover &{
    &>*{
        fill:${props => props.theme.text};
    }
}
`

const cardAnimations = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5
    }
  }
}

const Card = (props) => {
  const { id, name, description, demo, github, image } = props.data

  return (
    <Box key={id} variants={cardAnimations}>
      <Title>{name}</Title>
      <Description> {description} </Description>
      <Image img={image}
        style={{ alignSelf: 'center' }} />

      <Footer>
        <Link>
          <a target="blank" href={`${demo}`}> Visit </a>
        </Link>
        <Git>
          <a target="blank" href={`${github}`}> 
          <Github width={30} height={30} />          
          </a>
        </Git>
      </Footer>
    </Box>
  )
}

export default Card
