import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
type PropsType={
    imgSrc:string
    projectTitle:string
    description?:string
    projectLink?:string

}
export const Project = ({imgSrc, projectTitle, projectLink, description}:PropsType) => {
    return (
        <StyledProject>
            <StyledImg src={imgSrc} alt='cover'/>
            <StyledTitle>{projectTitle}</StyledTitle>
            <StyledDescription>{description||'Description'}</StyledDescription>
            <h4>Tech stack :</h4><Stack>HTML , JavaScript, SASS, React</Stack>
            <StyledLink href='#'>Code</StyledLink>
        </StyledProject>
    );
};
const StyledProject = styled.div`
  background-color: ${theme.colors.secondaryBg};
  max-width: 540px;
  width: 373px;
  height: 567px;
  box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 12px 28px;
`
const StyledImg = styled.img`
  width: 100%;
  height: 260px; 
  object-fit: cover;
  border-radius: 20px;
`
const StyledTitle = styled.h3`
  font-weight: 500;
  font-size: 28px;
  line-height: 26px;
  text-align: center;
`
const StyledDescription = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  align-items: center;
  
`
const Stack = styled.p`
`
const StyledLink = styled.a`
`
