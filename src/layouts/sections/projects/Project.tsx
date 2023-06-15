import React from 'react';
import styled from "styled-components";
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
            <StyledLink href='#'>Code</StyledLink>
        </StyledProject>
    );
};
const StyledProject = styled.div`
  background-color: yellow;
  max-width: 540px;
  width: 100%;
`
const StyledImg = styled.img`
  width: 100%;
  height: 260px; 
  object-fit: cover;
`
const StyledTitle = styled.h3`
`
const StyledDescription = styled.p`
`
const StyledLink = styled.a`
`
