/* eslint-disable react/prop-types */
import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Box = styled(motion.a)`
  width: calc(14rem + 15vw);
  text-decoration: none;
  height: 54rem;
  padding: 0.5rem;

  color: white;
  backdrop-filter: blur(2px);
  border: 4px solid #ffd700;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
`

const Container = styled(motion.div)``

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 80%;
  
  background-size: 100%;
  background-repeat: no-repeat;
  border: 1px solid transparent;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Box}:hover & {
  }
`

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: cursive, sans-serif;
  font-weight: 700;
  font-size: 15px;
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`

const Description = styled.div`
  padding: 0.5rem 0;
  font-size: 18px;
`

const cardAnimation = {
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

const QualComponents = (props) => {
  const { name, description, imgSrc, link } = props.proj
  return (
    <Container variants={cardAnimation}>
    <Box target="blank" href={`${link}`}>
      <Image img={imgSrc} />
      <Title>{name}</Title>
      <Description>
          {description}
        </Description>
    </Box>
    </Container>
  )
}

export default QualComponents
